// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Login.vue') },
  { path: '/dashboard', component: () => import('@/views/Dashboard.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes
})