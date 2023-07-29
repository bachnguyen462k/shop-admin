import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthStore } from '../store';

export const authGuard: CanMatchFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  console.log( authStore.selectors.isAuthenticated());
  if(!authStore.selectors.isAuthenticated()){
    return (
       router.createUrlTree(['/login'])
    );
  }else{
    return (
      authStore.selectors.isAuthenticated() 
    );
  }
};