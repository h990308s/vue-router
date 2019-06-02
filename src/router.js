import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/text',
      name: 'text',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Text.vue')
    },
		{
			path: '/chat',
			name: 'chat',
			component: () => import(/* webpackChunkName: "chat" */ './views/Chat.vue')
		},
		{
			path: '/logo',
			name: 'logo',
			component: () => import(/* webpackChunkName: "chat" */ './views/Logo.vue')
		}
  ]
})
