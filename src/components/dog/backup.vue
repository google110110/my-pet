<template>
    <div class="warper black">
        <div class="box">
            <div class="eyes">
                <div class="eye white">
                    <div class="eyeball pink"></div>
                </div>
                <div class="eye white">
                    <div class="eyeball blue"></div>
                </div>
            </div>
            <div class="mouth">
                <div class="lips-warpers" :style="{'height':+mth+mbh+'px'}">
                    <div class="lips-tops" :style="{'height':+mth+'px'}">
                        <div class="touth-warpers  white" :style="{'height':+2*mth+'px'}">
                            <div class="touths">
                                <div class="yellow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="lips-bottoms" :style="{'height':+mbh+'px'}">
                        <div class="touth-warpers  white" :style="{'height':+2*mbh+'px'}">
                            <div class="touths">
                                <div class="yellow"></div>
                                <div class="yellow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="horn left" :style="{'transform':+'rotateZ('+hl+'deg)'}"></div> -->
            <div class="horn left" :style="hl"></div>
            <div class="horn right" :style="hr"></div>
            <!-- <div class="horn right" :style="{'transform':+'rotateZ('+hr+'deg)'}"></div> -->
        </div>
    </div>
</template>

<script>
//hornRight:45,
// hornLeft:60,
// mouthTopHeigit:10,
// mouthBottomHeigit:0,
// eye:{
//     x:0,
//     y:0
// },
    //Vue.set(dog,'num',1)
    import Vue from 'vue'
    export default {
        name:'dog',
        props: {
            // mouthTopHeigit : {
            //     type:Number,
            //     default:10
            // },
            //  mouthBottomHeigit : {
            //     type:Number,
            //     default:10
            // },
            // hornLeft: {
            //     type:Number,
            //     default:45
            // },
            // hornRight : {
            //     type:Number,
            //     default:45
            // },
            dogg: {
                type: Object,
                default: () =>  {
                    return{
                        mouthTopHeigit:10,
                        mouthBottomHeigit:10,
                        hornLeft:45,
                        hornRight:45
                    }
                }
            },
        },
        // watch:{
        //     d(oldValue,newValue){
        //         console.log('watch-dog',newValue) 
        //     }
        // },
        mounted(){
            console.log('dogg',this.dogg,this.dog)
            // setTimeout(function(){
            //     console.log('dogg',this.dogg,this.dog)
            // },1000)
        },
        methods:{
        },
        computed: {
            dog(){
                console.log('d',this.dogg)
                return this.dogg
            },
            mth(){
                var h = this.dog.mouthTopHeigit
                // var h = this.mouthTopHeigit
                if(h <= 0){
                    return 1
                }
                return h
            },
            mbh(){
                var h = this.dog.mouthBottomHeigit
                // var h = this.mouthBottomHeigit
                if(h <= 0){
                    return 1
                }
                return h
            },
            hl(){
                var r = this.dog.hornLeft
                // var r = this.hornLeft
                if(0 <= r <= 90){
                    r = -1*r
                }else{
                    r = -45
                }
                console.log(r)
                return 'transform:'+'rotateZ('+r+'deg) translateX(5px) translateY(5px)'
            },
            hr(){
                var r = this.dog.hornRight
                // var r = this.hornRight
                if(0 <= r <= 90){
                     r = r
                }else{
                    r = 45
                }
                return 'transform:'+'rotateZ('+r+'deg) translateX(-5px) translateY(5px)'
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{margin: 0;}
    .warper{border-radius: 10px;width: 100px;height: 100px;opacity: 0.9;}
    .box{border-radius: 10px;box-shadow: 1px 10px 10px rgb(49, 49, 49); width: 100px;height: 100px;display: flex;flex-direction: column;position: relative;z-index: 10;perspective:1000px;}
    .blue{background-color: #b52051;}
    .pink{background-color: #9b59d7}
    .black{background-color: black;}
    .eyes{width: 100px;height: 30px;display: flex;margin-top: 10px;justify-content: center;}
    .eyes .eye{width: 30px;height: 30px; border-radius: 50%;display: flex;justify-content: center;align-items: center;}
    .eyes .eye:first-child{margin-right: 10px;}
    .eyes .eye .eyeball{width: 15px;height: 15px;border-radius: 50%;}
    .mouth{width: 60px;margin-left: 20px;}
    .mouth .lips-warper{width: 60px;height: 10px; overflow: hidden;position: relative;margin-top: 20px;}
    .mouth .lips-warper .lips-top{overflow: hidden; position: relative; width: 60px; border-radius: 50%;}//position: absolute;bottom: 0px;height: 50px;
    .white{background-color: white;}
    .yellow{background-color: #f8de9a;opacity: 1;}
    .red{background-color: red;}

    // .box::after,.box::before{z-index: 1; content: '';width: 30px;height: 10px;border-radius: 5px;background-color: black;position: absolute;top: -10px;left: 35px;}
    // .box::after{transform: rotateZ(-45deg) translateX(10px) translateY(5px)}
    // .box::before{transform: rotateZ(45deg) translateX(-10px) translateY(5px)}

    .mouth .lips-warpers{width: 60px;overflow: hidden;position: relative;margin-top: 20px;display: flex;flex-direction: column;}//height: 10px;
    .mouth .lips-warpers .lips-tops{overflow: hidden;width: 60px; position: relative;display: flex;align-items: flex-start}//display: flex;align-items: flex-start;
    .mouth .lips-warpers .lips-tops .touth-warpers{border: 1px solid red; width: 100%; border-radius: 50%;overflow: hidden;display: flex;justify-content: center;}//position: absolute;top: 0px;
    .mouth .lips-warpers .lips-bottoms{overflow: hidden;width:60px;position: relative;display: flex;align-items: flex-end;}
    .mouth .lips-warpers .lips-bottoms .touth-warpers{border: 1px solid red;width: 100%;border-radius: 50%;overflow: hidden;display: flex;justify-content: center;align-items: flex-end;}//top: -20px;position: absolute;
    .mouth .lips-warpers .touths{width: 30px;height: 10px;display: flex;}
    .mouth .lips-warpers .lips-tops .touth-warpers .touths{justify-content: center;}
    .mouth .lips-warpers .lips-bottoms .touth-warpers .touths{justify-content: space-between;}
    .touths div{width: 10px;height: 10px;}

    .horn{position: absolute; z-index: 1;width: 30px;height: 10px;border-radius: 5px;background-color: black;position: absolute;top: -10px;left: 35px;}
    // .left{transform: translateX(5px) translateY(5px)}//rotateZ(-45deg)
    // .right{transform: translateX(-5px) translateY(5px)}//rotateZ(45deg)
</style>