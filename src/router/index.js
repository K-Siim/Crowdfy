import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Explore from '../views/Explore.vue'
// import Campaigns from '../views/Campaigns.vue'
// import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/explore', name: 'Explore', component: Explore },
  // { path: '/campaigns', name: 'Campaigns', component: Campaigns },
  // { path: '/profile', name: 'Profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
