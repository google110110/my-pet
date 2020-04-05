
<template>
    <div class="warper" :style="wh">
        <div class="mes" @click="flagch = !flagch">
            <span class="ful" style="color:gray">宠物详情</span>
            <div class="ful">状态 :   <span :class="{red:full < 2}">{{full | ful}}</span></div>
            <div class="full">
                <div class="blue" v-for="(item,index) in full" :key="index"></div>
                <div v-for="item in (5-full)"></div>
            </div>
        </div>
        <transition name="fadem">
            <!-- v-if="flagch" -->
            <div class="message" v-if="flagch">
                <div class="c">
                    <div class="ful">姓名:小黑</div>
                    <div class="ful">性别:公</div>
                    <div class="ful">爱好:吃东西</div>
                    <div class="ful">讨厌:不吃东西</div>
                    <div class="ful">身高:130px</div>
                    <div class="ful">体积:130px * 130px</div>
                    <div class="ful">说明:及其常见的双瞳宠物，全身呈现黑色，带有黄金牙套。</div>
                    <div class="ful">饥饿值:{{full}}</div>
                    <div class="ful">状态 :   <span :class="{red:full < 2}">{{full | ful}}</span></div>
                </div>
                <div @click="flagch = !flagch" class="x">
                    <div>X</div>
                </div>
            </div>
        </transition>
        <!-- <div class="dog-box"> -->
            <div class="jump">
                <div class="dog-box dog" @mouseup="mouseup" @mousedown="mousedown" @mouseout="eyemove" @mouseleave="mouseleave"  ref="dog" :style="dogp">
                    <!-- //@mousemove="mousemove" -->
                    <dog class="" :dogg="dogg" @mousedown="stopBubbling"></dog>
                    <!-- // @mouseout="stopBubbling" @mousemove="stopBubbling" -->
                    <div class="speak dspeak" v-show="spe">
                        <div class="content">{{spe}}</div>
                        <div class="jt"></div>
                    </div>
                </div>
            </div>
            <div class="foods" v-drag="{dragclick,flag}"  @click="fo=false">
                <div class="speak fspeak" v-show="fo">
                    <div class="content"><h4 style="color:red;margin:0;">点击我给它喂点食物吧!</h4>觉得我碍事就把我移动到别的地方。</div>
                    <div class="jt"></div>
                </div>
            </div>
            <!-- //@click ="flag = !flag" -->
            <transition name="fade">
                <div class="food-menu" v-if="flag">
                    <!-- <div class="food-warper" :style="{'height':+h+'px'}" @mouseenter ="stopBubbling" @mouseleave="stopBubbling" > -->
                        <food class="" :fodnum="fodnum"></food>
                        <!-- :imgclick="imgclick" -->
                    <!-- </div> -->
                </div>
            </transition>
        <!-- </div> -->
    </div>
</template>

<script>
    import dog from '@/components/dog'
    import food from '@/components/food'
    import DARG from '@/util/drag'
    import Vue from 'vue'
    const _this = this
    //全局定义
    // Vue.directive('drag',{
    //     bind:function (el, binding, vnode) {
    //     },
    //     inserted :function (el){
    //         el.οnmοusedοwn=function(e){
    //             console.log('555')
    //             var l=e.pageX-el.offsetLeft;
    //             var t=e.pageY-el.offsetTop;
    //             document.οnmοusemοve=function(e){
    //                 el.style.left=e.pageX-l+'px';
    //                 el.style.top=e.pageY-t+'px';
    //             };
    //             el.οnmοuseup=function(){
    //                 document.οnmοusemοve=null;
    //                 el.οnmοuseup=null;
    //             }
    //         }
    //     }
    // })

    //html页面定义
    Vue.directive('drag',function(el, binding, vnode){
        // console.log(binding.value)//参数
        let j = true
        function elclick(){
            j = true
            for (let i in binding.value) {
                if (i == 'dragclick') {
                    binding.value.dragclick()
                    console.log('触发单击事件')
                    return 
                }  
            }
            console.log('没有绑定单击事件')
        }
        el.onmousedown=function(e){
            let i = ''
            let X=e.pageX-el.offsetLeft
            let Y=e.pageY-el.offsetTop
            i = setTimeout(function(){
                j = false
            },200)
            document.onmousemove=function(e){
                // let x = ;
                // let y = ;
                let hhyy = DARG.HW(e.pageX-X,e.pageY-Y)
                el.style.left = hhyy.x + 'px';      
                el.style.top = hhyy.y + 'px';
            }
            document.onmouseup=function(e){
                document.onmousemove=null;
                document.onmouseup=null;
                if(!j){
                    clearTimeout(i)
                }else{
                    elclick()
                }
            }
        }                
		})
    // Vue.set(this.dogg,'flag',true)
    // const O = 0
    export default {
        data(){
            return{
                flagch:false,
                ch:0,
                fo:true,
                full:0,
                // foodsnum:{},
                foodsnum:[],
                flag:false,
                t:0.5,
                ii:0,
                jump:'jump',
                contseti:'',
                jumppseti:'',
                eatseti:'',
                fullseti:'',
                clickseti:'',
                mouthseti:'',
                highjumpseti:'',
                legactionseti:'',
                eyeactionseti:'',
                h:0,
                w:0,
                position:{
                    x:100,
                    y:100
                },
                dogg:{
                    hornRight:40,//[0,90]
                    hornLeft:40,
                    mouthTopHeigit:5,//[0, ]
                    mouthBottomHeigit:10,
                    eyeLeft:{
                        x:10,//[-8,8]
                        y:0
                    },
                    eyeRight:{
                        x:10,
                        y:0
                    }
                },
                cont:[
                    '旁边有食物餐单可以喂我点吃的吗？',
                    '不要拿着食物跑我追不上你......',
                    '谢谢你，给我送吃的!',
                    '我吃饱了，让我休息一下,再吃。',
                    '我吃不下了!!',
                    '饿死了，饿死了!',
                    '有点饿了，点击旁边食物图片喂我点才吃的吗?',
                    '多读书，多看报，少吃零食，多睡觉。',
                    '你知道:山有木兮木有枝，心悦君兮君不知。是谁写的么?',
                    '曾经沧海难为水，......下一句是神马来着.......',
                    'Hello',
                    '十年生死两茫茫，不思量，自难忘。',
                    '人生若只如初见，何事秋风悲画扇。',
                    '愿得一心人，白头不相离',
                    '山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。',
                    '古德，古德，维瑞谷的!',
                    '我特啊有弄啥类!',
                ]
            }
        },
        name:'pet',
        components:{
            dog,
            food
        },
        // watch: {
        //     foodsnuml(newValue, oldValue) {
        //     // 　　　　console.log(newValue)
        //     }
        // },
        filters: {
            ful(v){
                let s = '快饿死了'
                switch (v) {
                    case 1: 
                        s = '重度饥饿';
                        break;
                    case 2: 
                        s = '中度饥饿';
                        break;
                    case 3:
                        s = '轻度饥饿';
                        break;
                    case 4: ;
                        s = '吃饱了';
                        break;
                    case 5: ;
                        s = '吃不下了';
                    break;
                    default:
                        break;
                }
                return s
            }
        },
        computed: {
            wh(){
                let w =this.w - 16
                let h = this.h - 16
                return 'height:'+h+'px;'+'width:'+w+'px'
            },
            spe(){
                let i = this.ii
                // console.log('spe5555')
                // setTimeout(function(){
                //     console.log('spe')
                //     this.ii = -1
                // },1500)
                if (i < 0) {
                    return
                }
                return this.cont[i]
            },
            foodsnuml(){
                return this.foodsnum
            },
            doggg(){
                return this.dogg
            },
            dogp(){
                let position =this.position
                let tra = this.tra
                return 'top:'+position.y+'px;left:'+position.x+'px;'+tra
            },
            tra(){
                let t = this.t
                let t0 = 100
                let t1 = 50
                return 'transition: all '+t+'s ease;'
            },
            keyf(){
                // let style = document.styleSheets[0];
                // let style=document.styleSheets[2]
                // style.insertRule('@keyframes 0%,30% { top:100px;}90%,100%{ top: 50px;}',2)
                // let style=this.$refs.dog.style
                // style.insertRule("@keyframes 0%,30% { top:"+t0+"px;}90%,100%{ top: "+t1+"px;}")
                // console.log(style,document.styleSheets[2])
            }
        },
        //  setTimeout(() => {},1000)用箭头函数,不然内部的this指向window
        mounted(){
            let _this = this
            this.h=window.innerHeight
            this.w=window.innerWidth
            // console.log('pet',style)
            // var dogg=this.dogg//对象指向地址
            this.fullseti = setInterval(function(){
                if(_this.full){
                    console.log('体力值减一')
                    _this.full--
                }
            },7000)
            this.smile()
            this.jumpp()
            this.run(0)
            this.run(1)
            this.conts()
            this.shutup()
        },
        methods:{
            conts(jj){
                let _this = this
                let j = jj || -1
                if (j >= 0) {
                    _this.ii = j
                    _this.shutup()
                    // console.log('jj')
                    return 
                }
                this.contseti = setInterval(function(){
                    let i =Math.floor(Math.random()*10)+6
                    _this.ii = i
                    // console.log(_this.cont[i])
                    _this.shutup()
                },6000)
            },
            shutup(){
                // let _this = this
                setTimeout(() => {
                        this.ii =-1
                        // console.log('闭嘴')
                    }, 3000);
            },
            fodnum(foodd,jj){
                let j =  jj || false
                let food = foodd || []
                // let length = 0
                if(j){
                    // delete this.foodsnum[del]
                    this.foodsnum.shift()
                    // console.log('fodnum减减',this.foodsnuml)
                    return
                }
                // if(!this.foodsnum.food){
                //     Vue.set(this.foodsnum,'foods',{})
                // }
                // this.foodsnum[id] = foodd
                let id = foodd.id.substr(foodd.id.length-1,1)
                // this.foodsnum[id] = foodd.id
                this.foodsnum.push(foodd.id)
                this.ch++
                console.log('喂的食物总数',this.ch)
            },
            imgclick(){
                console.log(imgclick)
            },
            dragclick(){
                this.flag =! this.flag
                // console.log(this.flag)
                // return ()=>{
                //     this.flag =! this.flag
                // }
            },
            eyemove(e){
                let dog=this.$refs.dog
                let eyeLeft={
                    x:0,
                    y:0
                }
                let eyeRight={
                    x:0,
                    y:0
                }
                eyeLeft.y=e.pageY-dog.offsetTop-40
                eyeLeft.x=e.pageX-dog.offsetLeft-45
                this.dogg.eyeLeft=eyeLeft
                eyeRight.y=e.pageY-dog.offsetTop-40
                eyeRight.x=e.pageX-dog.offsetLeft-85
                this.dogg.eyeRight=eyeRight
                console.log()
            },
            mousedown(e){
                clearInterval(this.legactionseti)
                let dog=this.$refs.dog
                // DARG.DARG(dog,)
                this.jump = ''
                this.t = 0
				var l=e.pageX-dog.offsetLeft;
                var t=e.pageY-dog.offsetTop;
				document.onmousemove = (e)=>{
                    let hhyy = DARG.HW(e.pageX-l,e.pageY-t)
                    this.dogrun(hhyy.x,hhyy.y)
				}
				document.onmouseup=function(e){
                    this.t = 0.5
					document.onmousemove=null;
					document.onmouseup=null;
				}
            },
            mouseup(e){
                this.run(1)
                this.t = 0.5
                this.jump = 'jump'
            },
            mouseleave(){
                setTimeout(() => {
                    console.log('回神')
                    this.eyerun()
                },700)
            },
            eyedefault(x,y){
                var eye={
                    x:x,
                    y:y
                }
                this.dogg.eyeRight=eye
                this.dogg.eyeLeft=eye
            },
            //阻止冒泡
            stopBubbling(){
                try{
                    e.stopPropagation();//非IE浏览器
                    console.log("1")
                }
                catch(e){
                    window.event.cancelBubble = true;//IE浏览器
                    console.log("0")
                } 
            },
            run(i){
                if(i == 1){
                   this.legactionseti = setInterval(() => {
                        this.legrun()
                        // console.log('111')
                    }, 3000);
                    return 
                }
                if (i == 'closeLeg') {
                    clearInterval(this.legactionseti)
                    return 
                }
                if (i == 'closeEye') {
                    clearInterval(this.eyeactionseti)
                    return 
                }
                this.eyeactionseti = setInterval(() => {
                    this.eyerun()
                }, 1000);
            },
            eyerun(){
                let i=Math.floor(Math.random()*10)
                let j=Math.floor(Math.random()*10)
                // console.log('跑神?',i,j)
                if (i < 4) {
                    if ((j-5) % 2) {
                        j = -1*j
                    }
                    // console.log('跑神了!',j)
                    this.eyedefault(j,j)
                }
            },
            smile(ii){
                let i = ii ||0
                if (i == 'closeMouth') {
                    this.openmouth(5,5)
                    clearInterval(this.mouthseti)
                    return
                }
                this.mouthseti = setInterval(() => {
                    let m=Math.floor(Math.random()*10)
                    let i=Math.floor(Math.random()*40)
                    let j=Math.floor(Math.random()*40)
                    if (m < 2) {
                        this.openmouth(i,j)
                        setTimeout(() => {
                            this.openmouth(5,5)
                        }, 1500);
                    }
                }, 2000);
            },
            openmouth(ii,jj){
                let i = ii
                let j = jj
                if(i > 40){
                    i = 40
                }
                if(j > 40){
                    j = 40
                }
                this.dogg.mouthTopHeigit=i,
                this.dogg.mouthBottomHeigit=j
                // console.log('微笑',i,j)
            },
            legrun(){
                // console.log('legrun')
                let position = this.position
                let x=Math.floor(Math.random()*200) -100
                let y=Math.floor(Math.random()*200) -100
                this.dogrun(position.x + x,position.y + y)
                // this.dogrun(position.x + x,position.y + y)
            },
            dogrun(xx,yy){
                // console.log('dogrun')
                let position = this.position
                // let x = xx || 0
                // let y = yy || 0
                let x = xx || position.x
                let y = yy || position.y
                if ((0 <= x && x <= this.w - 130) && (0 <= y && y <= this.h - 130)) {
                    position.x = x
                    position.y = y
                }
                // console.log(position.x,position.y)
            },
            jumpp(ii){
                let t = 1
                let position =this.position
                let f = this.foodsnuml
                console.log('没吃的了')
                // this.conts()
                let i = ii ||0
                if (i == 'closeJumpp') {
                    clearInterval(this.highjumpseti)
                    return
                }
                this.highjumpseti = setInterval(() => {
                // console.log(Object.keys(f).length)
                    if (!Object.keys(f).length) {
                        // clearInterval(this.eatseti)
                        // console.log(Object.keys(f).length)
                        if(t){
                            if (10 <= position.y +50 && position.y +50 <= this.h - 150) {
                                position.y += 50
                            }
                            // this.dogrun(0,50)
                            // position.y += 50
                            t --
                            return
                        }
                        if (10 <= (position.y - 50) && (position.y - 50) <= (this.h - 150)) {
                            position.y -= 50
                        }
                        // this.dogrun(0,-50)
                        // position.y += -50
                        t ++
                    }else{
                        this.eat()
                        clearInterval(this.highjumpseti)
                    }
                }, 1000) 
                
            },
            eat(ii){
                let dog = this.$refs.dog
                let position =this.position
                let f = this.foodsnuml
                let _this = this
                let i = ii ||0
                if (i == 'closeEat') {
                    clearInterval(this.highjumpseti)
                    return
                }
                clearInterval(this.mouthseti)
                clearInterval(this.legactionseti)
                console.log('有吃的')
                clearInterval(this.contseti)
                // this.contseti
                // this.ii = 2
                // _this.shutup()
                _this.conts(2)

                setTimeout(function(){
                    _this.conts(1) 
                },2000)
                console.log(this.spe)
                // this.shutup()
                this.eatseti = setInterval(function(){
                    if (Object.keys(f).length) {
                        if(_this.full < 5){
                            // console.log('吃的',Object.keys(f).length)
                            let fod = document.getElementById(f[0])
                            let ft = parseInt(fod.offsetTop) - parseInt(dog.offsetTop)- 80
                            let fl = parseInt(fod.offsetLeft) - parseInt(dog.offsetLeft)- 40
                            // let ft = parseInt(fod.style.top) - parseInt(dog.offsetTop)- 70
                            // let fl = parseInt(fod.style.left) - parseInt(dog.offsetLeft)- 40
                            if (ft ||fl ) {
                                if (Math.abs(fl) > Math.abs(ft)) {
                                    _this.t = Math.abs((fl/200).toFixed(1))
                                } else {
                                    _this.t = Math.abs((ft/200).toFixed(1))
                                }
                                position.y = parseInt(fod.offsetTop) - 80
                                position.x = parseInt(fod.offsetLeft) - 40 
                                // position.y = parseInt(fod.style.top) - 70
                                // position.x = parseInt(fod.style.left) - 40 
                            } else {
                                let xx = fod
                                let that = _this
                                _this.openmouth(25,30)
                                // _this.full++
                                // _this.fodnum(0,true)
                                setTimeout(() => {
                                    that.openmouth(5,5)
                                     setTimeout(() => {
                                        document.body.removeChild(xx)
                                        that.fodnum(0,true)
                                        that.full++
                                     },300)
                                }, 300);
                            }
                        }else{
                            console.log('我吃饱了剩下的等会再吃')
                            _this.conts(3)
                        }     
                    }else{
                        _this.smile()
                        _this.jumpp()
                        _this.t = 0.5
                        _this.run(1)
                        _this.conts()
                        clearInterval(_this.eatseti)
                    }
                },700)
            }
            
        },
    }
</script>

<style lang="scss" scoped>
.warper{position: relative;cursor: pointer;text-align: left;}
.warper .dog-box{position: absolute;}//top: 100px;left: 100px;
// .dog{transition: all .8s ease;}
.speak{transition: all .8s ease;border-radius: 5px;position: absolute;overflow: hidden;display: flex;align-items: flex-end;min-width: 200px;}
.jt{position: absolute;bottom: 5px; left: 8px; padding: 5px 10px;background-color: white;border-radius: 5px;width: 30px;height: 20px;transform: skew(-30deg,-30deg);}
.content{text-align: left; white-space:normal; word-break:break-all;overflow:hidden;margin-left: 13px; z-index: 10000;max-width: 200px;font-weight: bold; padding: 5px 10px;background-color: white;border-radius: 5px;}
.dspeak{bottom: 115px; left: 110px;}
.fspeak{bottom: 40px; left: 40px;}
//position: absolute;left: 13px;top: 5px;
.jump{transition: all .8s ease-out}
#jump{animation: dog 0.8s ease-out alternate infinite;}
.shadow{box-shadow: 1px 100px 10px rgb(49, 49, 49) !important; }
.fade-enter-active {
    transition: all .5s ease;
}
.fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter,.fade-leave-to{
    transform: translateX(80px);
    //translateX(-80px);
    // top: 100px;
    // right: -80px;
    // opacity: 0.9;
}
// @keyframes dog {
//   0%,30% {
//     top: 100px;
//   }
//   90%,100%{
//       top: 50px;
//   }
// }
.food-menu{position: fixed;top: 0;right: 0px;width: 80px;height: 100%;}
.foods{z-index: 100; position: fixed;top: 100px;right: 300px;width: 50px;height: 50px; border-radius: 50%;background-image: url(icon/food.png);background-size:100%;-moz-background-size:100%;}
// .foods img{width: 100%;height: 100%;}
.full{display: flex; border-radius: 5px;padding:0 30px;}
.full div{height: 10px;width: 50px;background-color: blanchedalmond;border-right: 1px solid #5a8eee;}
.full div:last-child{border: 0;border-radius: 0 5px 5px 0;}
.full div:first-child{border-radius: 5px 0 0 5px;}
.blue{background-color: #1461ef !important;}
.red{color: brown !important;}
.ful{color: #109405; text-align: left;font-size: 18px;font-weight: bold;;line-height: 30px;padding: 10px 50px;font-family: 'SimHei';}
.mes{width: 300px;background-color: #ccb372;padding: 10px 0;border-radius: 10px;}

.message{color: white; margin: 0;padding: 0; z-index: 1000; position: absolute;top: 0;right: 0; width: 100%;height: 100%; background-color: #17243a;opacity: 0.9;}
.x{width: 100%;height: 50px;position: absolute;bottom: 20px;right: 0;}
.x div{cursor: pointer;background-color: #121b2b; height: 50px;width: 50px; border-radius: 50%;font-size: 30px;font-weight: bold;line-height: 50px; margin: auto; color: white;opacity: 0.8;text-align: center;}
.c{width: 100%;text-align: center;}
.c div{text-align: center !important;line-height: 30px;margin-top: 20px;}
.fadem-enter-active {
transition: all .5s ease;
}
.fadem-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
transition: all .5s ease;
}
.fadem-enter,.fadem-leave-to{
    opacity: 0;
}
// .op{opacity: 0.8;}

</style>