import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/games-home',
    name: 'games-home',
    component: () => import('../views/GamesHome.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/pacman-calculo',
    name: 'pacman-calculo',
    component: () => import('../views/Matematicas/PacmanCalculo.vue')
  },
  {
    path: '/sopa-sum',
    name: 'sopa-sum',
    component: () => import('../views/Matematicas/SopaSum.vue')
  },
  {
    path: '/sum-sencillas',
    name: 'sum-sencillas',
    component: () => import('../views/Matematicas/SumSencillas.vue')
  },
  {
    path: '/memoria-mat',
    name: 'memoria-mat',
    component: () => import('../views/Matematicas/MemoriaMat.vue')
  },
  {
    path: '/identificar-letras',
    name: 'identificar-letras',
    component: () => import('../views/Abecedario/IdentificarLetras.vue')
  },
  {
    path: '/rally',
    name: 'rally',
    component: () => import('../views/Matematicas/Rally.vue')
  },
  {
    path: '/suma-colorea',
    name: 'suma-colorea',
    component: () => import('../views/Matematicas/SumaColorea.vue')
  },
  {
    path: '/reto-sumas',
    name: 'reto-sumas',
    component: () => import('../views/Matematicas/RetoSuma.vue')
  },
  {
    path: '/ordenar-alf',
    name: 'ordenar-alf',
    component: () => import('../views/Abecedario/OrdenarAlfabeto.vue')
  },
  {
    path: '/unir-letras',
    name: 'unir-letras',
    component: () => import('../views/Abecedario/UnirLetras.vue')
  },
  {
    path: '/laberinto-abe',
    name: 'laberinto-abe',
    component: () => import('../views/Abecedario/LaberintoAbe.vue')
  },
  {
    path: '/letras-teclado',
    name: 'letras-teclado',
    component: () => import('../views/Abecedario/LetrasTeclado.vue')
  },
  {
    path: '/orden-alfabetico',
    name: 'orden-alfabetico',
    component: () => import('../views/Abecedario/OrdenAlfabetico.vue')
  },
  {
    path: '/colorea-dinosaurios',
    name: 'colorea-dinosaurios',
    component: () => import('../views/Colorear/ColoreaDinosaurios.vue')
  },
  {
    path: '/pizarra',
    name: 'pizarra',
    component: () => import('../views/Colorear/PizarraPixel.vue')
  },
  {
    path: '/colorear-animales',
    name: 'colorear-animales',
    component: () => import('../views/Colorear/ColorearAnimales.vue')
  },
  {
    path: '/colorea-numeros',
    name: 'colorea-numeros',
    component: () => import('../views/Colorear/ColorearNumeros.vue')
  },
  {
    path: '/colorear-alfabeto',
    name: 'colorear-alfabeto',
    component: () => import('../views/Colorear/ColorearAlfabeto.vue')
  },
  {
    path: '/pintar-primavera',
    name: 'pintar-primavera',
    component: () => import('../views/Colorear/PintarPrimavera.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
