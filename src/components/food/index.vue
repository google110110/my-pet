<template>
    <div class="warper">
        <div class="foods" v-for="(item , index) in imgsrc" :key="index">
            <div :id="'Food'+index"  v-drags="{fodnum}" :style="'background-image: url('+item+');'" class="img" ></div>
            <!-- <img class="img" :src="item" v-drag="dragclick"> -->
        </div>
    </div>
</template>

<script>
    //html页面定义
    import Vue from 'vue'
    import DARG from '@/util/drag'
    const _this=this
    var num = 0
    Vue.directive('drags',function(el, binding, vnode){
        // console.log(binding.value)//参数
        let j = true
        function elclick(e){
            j = true
            for (let i in binding.value) {
                if (i == 'dragclick') {
                    binding.value.dragclick()
                    console.log('触发单击事件')
                    return 
                }  
            }
            console.log('dd没有绑定单击事件',binding)
        }
        function clon(par) {
            let chi = par.cloneNode(true)
            chi.id = par.id + '-' + num++
            chi.className='foodimg'
            chi.style.opacity = 0
            document.body.appendChild(chi)
            return chi
        }
        el.onmousedown=function(e){
            let h=window.innerHeight
            let elll = clon(el)
            DARG.DARG(elll)
            let i = ''
            let X=e.pageX-el.offsetLeft
            let Y=e.pageY-el.offsetTop
            i = setTimeout(function(){
                j = false
            },200)
            document.onmousemove=function(e){
                elll.style.opacity = 1
                let hhyy = DARG.HW(e.pageX - 30 ,e.pageY - 30 )
                elll.style.left =hhyy.x + 'px';
                elll.style.top = hhyy.y+ 'px';
                // console.log('创造')             
            }
            document.onmouseup=function(e){
                console.log(h,parseInt(elll.style.top))
                if (e.pageX-X > -60) {
                    console.log('删除')
                    document.body.removeChild(elll) 
                }else{
                    binding.value.fodnum(elll)
                    // elll.style.top = null
                    // h = h - parseInt(elll.style.top) -70
                    setTimeout(function(){
                        elll.style.transition = 'all 4s ease';
                        elll.style.top = h - 70 + 'px'
                        
                    },700)
                    // console.log(h , parseInt(elll.style.top))   
                }
                document.onmousemove=null;
                document.onmouseup=null;
                if(!j){
                    clearTimeout(i)
                }else{
                    elclick(e)
                }
            }
        }                
	})
    export default {
        data(){
            return{
                // fodnum:{},
                imgsrc:[
                    require('./image/food.png'),
                    require('./image/food1.png'),
                    // require('./image/food2.png'),
                    require('./image/food2.png'),
                    require('./image/food3.png'),
                    require('./image/food4.png'),
                    require('./image/food5.png'),
                    require('./image/food6.png'),
                    require('./image/food7.png'),
                    require('./image/food8.png'),
                    require('./image/food9.png')
                ]
            }
        },
        name:'food',
        mounted(){
            // console.log(this.fodnum)
        },
        props: {
            fodnum:{
                type:Function,
                default: function(){}
            }
        },
        methods:{
            dragclick(){
                console.log('dragclick')
            }
        }
    }
</script>

<style lang="scss" scoped>
.warper{width: 100%;background-color: brown;height: 100%;display: flex;flex-direction: column;padding-left: 10px;}
.warper .foods{position: relative;width: 60px;height: 60px;align-content: center;justify-content: center;}
// .imgwarper {position: absolute;top: 0;left: 0;width: 60px;height: 60px;}
.warper .foods .img{position: absolute;top: 0;left: 0;width: 60px;height: 60px;background-size:100%;-moz-background-size:100%;}
</style>