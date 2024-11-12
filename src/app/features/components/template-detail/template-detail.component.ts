import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CV } from '../../models/cv.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CVService } from '../../services/cv.service';
import { Model } from '../../models/enumerations/model.enum';

@Component({
  selector: 'app-template-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-detail.component.html',
  styleUrl: './template-detail.component.scss',
})
export class TemplateDetailComponent implements OnInit {

  cv$!: Observable<CV>;
  loading$!: Observable<boolean>;
  value: string = '12%';

  private profilControl = new FormControl("", Validators.required);
  model!: Model;

  constructor(private route: ActivatedRoute, private cvService: CVService) { }


  ngOnInit(): void {
    this.initObservables()
  }


  initObservables() {
    this.cv$ = this.route.data.pipe(
      map((data) => data['cv'])
    )
    this.loading$ = this.cvService.loading$;
  }

  profil!: File;

  pickImageFromStorage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.profil = file;
        this.profilControl.setValue(file.name);
      }
    };
    input.click();
  }

}
