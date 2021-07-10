import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// import About from "../pages/About.vue";
// // import Home from '../pages/Home.vue'
// import Home from "@/pages/Home.vue";

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
const User = () => import(/* webpackChunkName: "user" */ '@/pages/User.vue')
const NotFound = () => import("@/pages/NotFound.vue")

// 配置映射關係
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      name: "Renny",
      age: 26
    },
    children: [
      {
        path: "/home", // ""
        redirect: "/home/message",
      },
      {
        path: "message",
        component: () => import('@/pages/HomeMessage.vue')
      },
      {
        path: "product",
        component: () => import('@/pages/HomeProduct.vue')
      }
    ]
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user/:name/id/:id",
    name: "user",
    component: User,
  },
  {
    path: "/login",
    component: () => import('@/pages/Login.vue')
  },
  {
    path: "/:pathMatch(.*)", // 匹配404 /:pathMatch(.*)* 加上*號會將path解析為陣列
    component: NotFound
  }
];


const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 動態添加路由
export const CategoryRoute = [
  {
    path: "/category",
    component: () => import('@/pages/Category.vue')
  }
]

const momentRoute = [
  {
    path: "moment",
    component: () => import('@/pages/HomeMoment.vue')
  }
]

router.addRoute(...CategoryRoute)

// 動態添加二級路由
router.addRoute('home', ...momentRoute)

// 導航守衛
let counter = 0

// to 要跳轉的路由物件
// from 從哪裡開始跳轉的路由物件
/**
 * 返回值
 * 
 * false 為不進行跳轉
 * undefined 為默認跳轉
 * 字符串 路由名稱
 * 物件 {path, params, query}
 */
router.beforeEach((to, from) => {
  // if(to.path.indexOf("/home") !== -1) {
  //   return "/login"
  //   console.log('baforeEach home')
  // }
  if(to.path !== "/login") {
    if (!window.localStorage.getItem('token')) {
      return "/login"
    }
  }
  
  console.log(`路由跳轉了${++counter}次`)
})

export default router;
