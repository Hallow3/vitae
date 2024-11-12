import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { Router } from '@angular/router';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { CV } from '../../models/cv.model';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CVService } from '../../services/cv.service';
import { Model } from '../../models/enumerations/model.enum';
import { CommonModule } from '@angular/common';
import { Template } from '../../models/template.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, NgxSkeletonLoaderModule],
  providers: [CVService],
  templateUrl: './template-list.component.html',
  styleUrl: './template-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateListComponent implements OnInit {

  loading$!: Observable<boolean>;
  templates$!: Observable<Template[]>;
  searchCtrl!: FormControl;

  isLoading = true;
  isOffline = false;
  value: string = window.innerWidth > 768 ? '15vw' : '100%';

  constructor(private router: Router, private cvService: CVService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.initObservables();
    this.cvService.getTemplates();
  }

  initForm() {
    this.searchCtrl = this.formBuilder.control('');
  }

  initObservables() {
    this.loading$ = this.cvService.loading$
    const search$ = this.searchCtrl.valueChanges.pipe(
      startWith(this.searchCtrl.value),
      map(value => value.trim().toLowerCase())
    )
    this.templates$ = combineLatest([
      search$,
      this.cvService.templates$
    ]).pipe(
      map(([search, templates]) => {
        return (templates.filter(template => template.CVs.find(cv => cv.model.toString() === search || cv.name.toLowerCase().includes(search)))
        )
      })
    )
  }

  displayDetails(cv: CV) {
    this.router.navigateByUrl('/templates/details/'+ cv.id);
  }

  displayModelName(cvModel: Model): string {
    switch (cvModel) {
      case Model.SD:
        return "Simple avec description";
      case Model.SWD:
        return "Simple sans description";
      case Model.SP:
        return "Simple avec photo";
      case Model.SWP:
        return "Simple sans profil";
        case Model.SDP:
        return "Simple avec description et profil";
      case Model.SWDP:
        return "Simple sans description ni profil";
      default:
        return "Simple sans photo";
    }
  }

}
