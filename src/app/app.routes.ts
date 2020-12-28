import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './common';
import { HomeComponent } from './home';

export const routes:Routes = [
    { path:'home', component: HomeComponent },
    {
        path:'tasks',
        loadChildren: () => import('./tasks/task.module').then(t => t.TaskModule) 
    },
    { path:'', redirectTo: 'home', pathMatch:'full' },
    { path:'**', component: PageNotFoundComponent }
]