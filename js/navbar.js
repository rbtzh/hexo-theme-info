window.addEventListener('load', () => {
    let headerBtn = document.querySelector('#moreBtn');
    let headerNav = document.querySelector('#headerNav');
    let navFullHeight = 390; //Because the navbar's display is none, and I haven't found a way to get it's height, I will hard code this.Will Change later.
    let animateFold = true; //true => the next animation should unfold the nav bar

    headerBtn.addEventListener('click', function () {
        if (animateFold) { //the process should unfold the navbar
            animateFold = false;
            setSmoothAnimate(headerNav, navFullHeight)
        }
        else {
            animateFold = true;
            setSmoothAnimate(headerNav, 0)
        }
    })

    function setSmoothAnimate(obj, target, callback){
        clearInterval(obj.timer)
        obj.timer = setInterval(function(){
            let move = (target - obj.offsetHeight)/10;
            move=move > 0 ? Math.ceil(move):Math.floor(move);
            obj.style.height = obj.offsetHeight + move + 'px';
            obj.style.opacity = (obj.offsetHeight / navFullHeight);
            if(obj.offsetHeight == target){
                 clearInterval(obj.timer)
                 if(callback){
                     callback()
                 }
            }   
        }, 15)
    }
})