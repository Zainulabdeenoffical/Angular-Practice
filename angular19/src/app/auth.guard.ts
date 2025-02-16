import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';

export const authGuard: CanActivateFn = (router, state) => 
{
   const _router = inject(Router);
  let islogined = sessionStorage.getItem("islogined")
  if (islogined == 'false') {
  alert("plase login firts")
  _router.navigate(['login'])
  }
  return true;
};
