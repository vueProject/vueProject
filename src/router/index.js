import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
import PagesView from '@/views/pagesView'
import HomeView from '@/views/homeView'
import KoalaListen from '@/views/koalaListen'
import KoalaLearn from '@/views/KoalaLearn'
import PersCenter from '@/views/persCenterView'
import login from '@/views/login'
import uploaduDate from '@/views/uploaduDate'

Vue.use(Router)
// const testWeb = r => require.ensure([], () => r(require('../page/testWeb')), 'testWeb'); 
// const FangBingBing = r => require.ensure([], () => r(require('../page/FangBingBing')), 'FangBingBing'); 

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/pages/'
        },
        {
            path: '/pages',
            component: PagesView,
            children: [
                {
                    path: '',
                    redirect: '/pages/home'
                },
                {
                    path: 'home',
                    name: 'HomeView',
                    component: HomeView
                },
                {
                    path: 'koalaListen',
                    name: 'koalaListen',
                    component: KoalaListen
                },
                {
                    path: 'koalaLearn',
                    name: 'koalaLearn',
                    component: KoalaLearn
                },
                {
                    path: 'persCenter',
                    name: 'persCenter',
                    component: PersCenter
                }
            ]
            // linkActiveClass: 'active',
            // linkExactActiveClass: 'active'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/uploaduDate',
            name: 'uploaduDate',
            component: uploaduDate
        }
    ]
})
