import Vue from 'vue'
import Router from 'vue-router'

import contact_form from '@/components/contact_form';
import send_history from '@/components/send_history';
import main_page from '@/components/main_page'
import gallery from '@/components/gallery'
import stories from '@/components/stories'
import admin_login from '@/components/admin/admin_login'
import admin_gallery from '@/components/admin/admin_gallery'
import admin_history from '@/components/admin/admin_history'
import admin_user from '@/components/admin/admin_user'

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        component: main_page
      },
      {
        path: '/contato',
        component: contact_form
      },
      {
        path: '/enviar-historia',
        component: send_history
      },
      {
        path: '/galeria',
        component: gallery
      },
      {
        path: '/historias',
        component: stories
      },
      {
        path: '/admin',
        component: admin_login,
      },
      {
        path: '/admin/historia',
        component: admin_history
      },
      {
        path: '/admin/galeria',
        component: admin_gallery
      },
      {
        path: '/admin/usuarios',
        component: admin_user
      }
    ]
  })
  
export default router
