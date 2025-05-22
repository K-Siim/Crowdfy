import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Explore from '../views/Explore.vue'
import Campaigns from '../views/Campaigns.vue'
import Profile from '../views/Profile.vue'
import ProfileSettings from '@/components/Profile/Settings.vue'
import ProfileNotifications from '@/components/Profile/ProfileNotifications.vue'
import ProfileFavourites from '@/components/Profile/Favourites.vue'
import ProfileHistory from '@/components/Profile/History.vue'
import ExploreCards from '../components/Explore/ExploreCards.vue'
import ExploreCardDetail from '../components/Explore/ExploreCardDetail.vue'
import Explore from '../views/Explore.vue'

// import ProfileHistory from '@/components/Profile/History.vue'
import Overview from '@/components/Campaigns/Overview.vue'
import MyCampaigns from '@/components/Campaigns/MyCampaigns.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/explore', name: 'Explore', component: Explore },
  { path: '/campaigns', name: 'Campaigns', component: Campaigns },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/article/:title', name: 'Article', component: ExploreCardDetail },
  { path: '/explore', name: 'Explore', component: Explore },

  
  {
    path: '/profile',
    component: Profile,
    children: [
      { path: '', redirect: '/profile/settings' }, // vaikimisi redirect
      { path: 'settings', component: ProfileSettings },
      { path: 'notifications', component: ProfileNotifications },
      { path: 'favorites', component: ProfileFavourites },
      { path: 'history', component: ProfileHistory }
    ]
  },

  {
    path: '/campaigns',
    component: Campaigns,
    children: [
      { path: '', redirect: '/campaigns/mycampaigns' },
      { path: 'mycampaigns', component: MyCampaigns },
      { path: 'overview', component: Overview }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


