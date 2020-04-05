const HW = (x,y)=>{
    let h=window.innerHeight -60
    let w=window.innerWidth-60
    let xy = {
        x : 0 ||x,
        y : 0 ||y
    }
    if(xy.x <= 0){
        xy.x = 0          
    }
    if(xy.x >= w){
        xy.x = w
    }
    if(xy.y <=0){
        xy.y = 0          
    }
    if(xy.y >= h){
        xy.y = h
    }
    return xy
}
// const DARG = function(el,fn){
const DARG = (el,fn)=>{
    let fnn = fn || function(){}
    let j = true
    // console.log(w)
    function elclick(){
        fnn()
        console.log('单击事件')
    }
    el.onmousedown=function(e){
        let i = ''
        let h=window.innerHeight
        let X=e.pageX-el.offsetLeft
        let Y=e.pageY-el.offsetTop
        el.style.transition = 'all 0s ease';
        i = setTimeout(function(){
            j = false
        },200)
        document.onmousemove=function(e){
            let hhww = HW(e.pageX-X,e.pageY-Y)
            el.style.left = hhww.x + 'px';      
            el.style.top = hhww.y + 'px';
        }
        document.onmouseup=function(e){
            document.onmousemove=null;
            document.onmouseup=null;
            el.style.transition = 'all 4s ease';
            el.style.top = h - 70 +'px'
            if(!j){
                // e.style.transition = 'all 0s ease';
                clearTimeout(i)
            }else{
                elclick()
            }
        }
    } 
}
export default{
    DARG,
    HW
}