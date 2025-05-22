import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Explore from '../views/Explore.vue'
import Campaigns from '../views/Campaigns.vue'
import Profile from '../views/Profile.vue'
import ProfileSettings from '@/components/Profile/Settings.vue'
import ProfileNotifications from '@/components/Profile/ProfileNotifications.vue'

// import ProfileFavorites from '@/components/Profile/Favorites.vue'
// import ProfileHistory from '@/components/Profile/History.vue'
import Overview from '@/components/Campaigns/Overview.vue'
import MyCampaigns from '@/components/Campaigns/MyCampaigns.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/explore', name: 'Explore', component: Explore },
  { path: '/campaigns', name: 'Campaigns', component: Campaigns },
  { path: '/profile', name: 'Profile', component: Profile },

  {
    path: '/profile',
    component: Profile,
    children: [
      { path: '', redirect: '/profile/settings' }, // vaikimisi redirect
      { path: 'settings', component: ProfileSettings },
      { path: 'notifications', component: ProfileNotifications },
      // { path: 'favorites', component: ProfileFavorites },
      // { path: 'history', component: ProfileHistory }
    ]
  },

  {
    path: '/campaigns',
    component: Campaigns,
    children: [
      { path: '', redirect: 'Campaigns', component: Overview }, // vaikimisi sisu
      { path: 'overview', component: Overview },
      { path: 'mycampaigns', component: MyCampaigns },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
