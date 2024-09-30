import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { AboutComponent } from './features/components/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
