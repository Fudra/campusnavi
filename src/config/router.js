import NProgress from 'nprogress';
import sidebar from './sidebar';

export const routerConfig = {
   saveScrollPosition: true,
   transitionOnLoad: true,
   linkActiveClass: 'is-active'
};

export const interceptors = (request, next) => {
   NProgress.inc(0.2);

   next((response) => {
      NProgress.done();
      return response;
   });
};

export const beforeEach = ({ next }) => {
   NProgress.start();
   if (sidebar.isMobile && sidebar.opened) {
      sidebar.opened = false;
   }
   next();
};

export const afterEach = () => {
   NProgress.done();
};

export default {
   routerConfig,
   beforeEach,
   afterEach,
   interceptors
};
