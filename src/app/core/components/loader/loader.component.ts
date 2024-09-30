import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../../../features/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  isLoading = this.loaderService.loading$;

  constructor(private loaderService: LoaderService) {}

}
