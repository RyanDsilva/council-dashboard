import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import NewEvent from '@/views/event/NewEvent';
import Login from '@/views/council/Login';
import SignUp from '@/views/council/SignUp';
import Dashboard from '@/views/council/Dashboard';
import EditCouncil from '@/views/council/EditCouncil';
import AllEvents from '@/views/event/AllEvents';
import EditEvent from '@/views/event/EditEvent';
import EventInfo from '@/views/event/EventInfo';
import UserCreate from '@/views/user/UserCreate';
import UserDashboard from '@/views/user/UserDashboard';
import Error404 from '@/views/404';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp,
    },
    {
      path: '/council/:id/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: '/council/:id/edit',
      name: 'EditCouncil',
      component: EditCouncil,
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: '/event/create',
      name: 'NewEvent',
      component: NewEvent,
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: '/event/all',
      name: 'AllEvents',
      component: AllEvents,
    },
    {
      path: '/event/:id',
      name: 'EventInfo',
      component: EventInfo,
    },
    {
      path: '/event/:id/edit',
      name: 'EditEvent',
      component: EditEvent,
      // meta: {
      //   requiresAuth: true,
      //   is_admin: true,
      // },
    },
    {
      path: '/user/create',
      name: 'UserCreate',
      component: UserCreate,
    },
    {
      path: '/user/:rollNo',
      name: 'UserDashboard',
      component: UserDashboard,
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: '*',
      name: 'Error',
      component: Error404,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (this.$store.state.user == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.isAdmin) {
          next();
        } else {
          next({ name: 'AllEvents' });
        }
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
