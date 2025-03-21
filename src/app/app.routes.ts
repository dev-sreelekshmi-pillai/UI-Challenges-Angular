import { Routes } from '@angular/router';
import { Challenge01Component } from './challenges/challenge01/challenge01.component';
import { Challenge02Component } from './challenges/challenge02/challenge02.component';
import { Challenge03Component } from './challenges/challenge03/challenge03.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'challenge01', component: Challenge01Component },
    { path: 'challenge02', component: Challenge02Component },
    { path: 'challenge03', component: Challenge03Component },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route

];
