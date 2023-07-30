import { Routes } from '@angular/router';
import { authGuard, nonAuthGuard } from './shared/guards';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
    title: 'Sign in',
    canMatch: [nonAuthGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component'),
    title: 'Sign up',
    canMatch: [nonAuthGuard],
  },
  {
    path: '',
    loadComponent: () => import('./layout/main/main.component'),
    canMatch: [authGuard],
    children:[
      {
        path: 'editor',
        loadChildren: () => import('./editor/editor.routes'),
        canMatch: [authGuard],
        title: 'Editor',
      },
      {
        path: 'settings',
        loadComponent: () => import('./setting/setting.component'),
        canMatch: [authGuard],
        title: 'Settings',
      },
      {
        path: 'san-pham',
        loadComponent: () => import('./product/product.component'),
        canMatch: [authGuard],
        title: 'Sản phẩm',
      },
      {
        path: 'article/:slug',
        loadComponent: () => import('./article-detail/article-detail.component'),
      },
      {
        path: ':username',
        loadChildren: () => import('./profile/profile.routes'),
      },
      {
        path: '',
        loadComponent: () => import('./home/home.component'),
        title: 'Trang chủ',
      },
    ],
  },
];
