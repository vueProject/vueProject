import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Hello from '@/components/Hello'

Vue.use(Router)
// const testWeb = r => require.ensure([], () => r(require('../page/testWeb')), 'testWeb'); 
// const FangBingBing = r => require.ensure([], () => r(require('../page/FangBingBing')), 'FangBingBing'); 

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
