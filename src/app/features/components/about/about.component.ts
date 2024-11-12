import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
