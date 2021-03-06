import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import NewEvent from '@/views/event/NewEvent';
import Login from '@/views/council/Login';
import SignUp from '@/views/council/SignUp';
import Dashboard from '@/views/council/Dashboard';
import EditCouncil from '@/views/council/EditCouncil';
import AddMember from '@/views/council/AddMember';
import AllEvents from '@/views/event/AllEvents';
import EditEvent from '@/views/event/EditEvent';
import EventInfo from '@/views/event/EventInfo';
import Registrations from '@/views/event/Registrations';
import UserCreate from '@/views/user/UserCreate';
import UserInfo from '@/views/user/UserInfo';
import Calendar from '@/views/Calendar';
import Error404 from '@/views/404';
import store from '../store';

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
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/council/:id/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/council/:id/members/add',
      name: 'AddMember',
      component: AddMember,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/council/:id/edit',
      name: 'EditCouncil',
      component: EditCouncil,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/event/create',
      name: 'NewEvent',
      component: NewEvent,
      meta: {
        requiresAuth: true,
      },
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
      path: '/event/:id/registrations',
      name: 'EventReg',
      component: Registrations,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/event/:id/edit',
      name: 'EditEvent',
      component: EditEvent,
      meta: {
        requiresAuth: true,
        isOwner: true,
      },
    },
    {
      path: '/user/create',
      name: 'UserCreate',
      component: UserCreate,
    },
    {
      path: '/users/all',
      name: 'UserInfo',
      component: UserInfo,
      meta: {
        requiresAuth: true,
      },
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
    if (store.state.isLoggedIn === false) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(store.state.user);
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.isAdmin) {
          next();
        } else {
          next({ name: 'AllEvents' });
        }
      } else if (to.matched.some(record => record.meta.isOwner)) {
        if (to.params.id in user.events) {
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
