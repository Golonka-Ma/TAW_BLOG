import { Routes } from '@angular/router';
import { BlogComponent } from "./components/blog/blog.component";
import {BlogItemDetailsComponent} from "./components/blog-item-details/blog-item-details.component";
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/signup/signup.component').then(m => m.SignupComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent),
    canActivate: [authGuard]
  },
  {
    path: 'blog/detail/:id',
    loadComponent: () => import('./components/blog-item-details/blog-item-details.component').then(m => m.BlogItemDetailsComponent),
  },
  {
    path: 'add',
    loadComponent: () => import('./components/add-post-form/add-post-form.component').then(m => m.AddPostFormComponent)
  },
  {
    path: 'account',
    loadComponent: () => import('./components/account-management/account-management.component').then(m => m.AccountManagementComponent)
  }
];

