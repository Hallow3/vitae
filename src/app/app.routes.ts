import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { AboutComponent } from './features/components/about/about.component';
import { TemplateListComponent } from './features/components/template-list/template-list.component';
import { TemplateDetailComponent } from './features/components/template-detail/template-detail.component';
import { CVResolver } from './features/resolvers/cv.resolver';

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
        path: 'templates',
        component: TemplateListComponent
    },
    {
        path: 'templates/details/:id',
        component: TemplateDetailComponent,
        resolve: {cv: CVResolver}
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
