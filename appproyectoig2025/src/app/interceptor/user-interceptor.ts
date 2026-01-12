import { HttpInterceptorFn } from '@angular/common/http';

export const userInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = localStorage.getItem('token');
  console.log('interceptor token', token);

  // ⛔ NO agregar token al login
  if (!token || req.url.includes('/user/login')) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
