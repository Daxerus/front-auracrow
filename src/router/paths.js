export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/admin/DashboardLogin.vue')
  },
  {
    path: '/admin',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/admin/DashboardMain.vue')
      },
      {
        path: 'add-entry',
        name: 'AddEntry',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/admin/AddEntry.vue')
      },
      {
        path: 'manage-entries',
        name: 'ManageEntries',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/admin/ManageEntries.vue')
      },
      {
        path: 'section/:section',
        name: 'SectionDetail',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/admin/SectionDetail.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/public/LandingPage.vue')
  },
  {
    path: '/gallery',
    children: [
      {
        path: ':section',
        name: ':section',
        component: () => import('@/views/public/SectionGallery.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: () => import('@/views/public/AboutMe.vue')
  }
]
