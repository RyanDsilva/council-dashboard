import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import NewEvent from '@/views/event/NewEvent';
import AllEvents from '@/views/event/AllEvents';
import EditEvent from '@/views/event/EditEvent';
import EventInfo from '@/views/event/EventInfo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/event/create',
      name: 'NewEvent',
      component: NewEvent,
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
    },
  ],
});
