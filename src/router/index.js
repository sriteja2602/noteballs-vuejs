import { createRouter, createWebHashHistory } from 'vue-router'

import EditNoteView from '@/views/EditNoteView.vue'
import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import StatsView from '@/views/StatsView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/notes', component: NotesView },
    { path: '/notes/edit/:id', component: EditNoteView },
    { path: '/stats', component: StatsView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router