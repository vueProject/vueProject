<template>
    <div class="footer-nav">
        <!-- <router-link class="navBut navLook" :to="{name: 'homeView'}" :class="[this.$route.name == 'HomeView' ? 'active' : '']" >考拉看<span></span></router-link>
        <router-link class="navBut navListen" :to="{name: 'koalaListen'}" :class="[this.$route.name == 'koalaListen' ? 'active' : '']">考拉听<span></span></router-link>
        <router-link class="navBut navLearn" :to="{name: 'koalaLearn'}"  :class="[this.$route.name == 'koalaLearn' ? 'active' : '']">考拉学<span></span></router-link>
        <router-link class="navBut navCenter" :to="{name: 'persCenter'}"  :class="[this.$route.name == 'persCenter' ? 'active' : '']">我的<span></span></router-link> -->
        <router-link class="navBut navLook" :to="{name: 'HomeView'}">考拉看<span></span></router-link>
        <router-link class="navBut navListen" :to="{name: 'koalaListen'}">考拉听<span></span></router-link>
        <router-link class="navBut navLearn" :to="{name: 'koalaLearn'}">考拉学<span></span></router-link>
        <router-link class="navBut navCenter" :to="{name: 'persCenter'}">我的<span></span></router-link>
    </div>
</template>

<script>
export default {
    name: "footer",
    data() {
        // console.log(this.$route.name);
        return {
            
            // pathUrl: this.$route.name
            // date: [
            //     {text: '考拉看', class: 'navBut navLook', link: 'home'},
            //     {text: '考拉听', class: 'navBut navListen', link: 'KoalaListen'},
            //     {text: '考拉学', class: 'navBut navLearn'},
            //     {text: '我的', class: 'navBut navCenter'},
            // ],
            // changeClass: 0
        };
    }
    // methods: {
        // toggleClick(count) {
            // for(let i = 0; i < this.date.length; i++) {
            //     let className = this.date[count].class;
            //     if(count === i) {
            //         let newClass = className + ' active';
            //         this.date[count].class = newClass;
            //     }else {
            //         this.date[count].class = className;
            //     }
                
                
                
            // }
            // console.log(className);
            // this.changeClass = count;
            // console.log($(this.$el).children()[count]);
            // const el = $(this.$el).children()[count];
        // }
    // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .footer-nav {
        position: fixed;
        width: 6.4rem;
        height: 0.78rem;
        background-color: #2978c7;
        bottom: 0;
        left: 0;
        .navBut {
            position: relative;
            float: left;
            width: 25%;
            height: 0.78rem;
            background-size: 0.57rem 0.51rem;
            background-repeat: no-repeat;
            background-position: center 0;
            padding-top: 0.4rem;
            font-size: 0.2rem;
            color: #fff;
            span {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                background-color: transparent;
            }
        }
        .navLook {
            background-image: url(../assets/footer/navLook.png);
        }
        .navListen {
            background-image: url(../assets/footer/navListen.png);
        }
        .navLearn {
            background-image: url(../assets/footer/navLearn.png);
        }
        .navCenter {
            background-image: url(../assets/footer/navCenter.png);
        }
        .router-link-active {
            color: red;
            span {
                background-color: rgba(255,255,255,0.2);
            }
        }
    }
</style>
