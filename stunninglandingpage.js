// Shery.imageEffect(element,configurations)
Shery.imageEffect('#back',{style: 5,
     config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.578479372035608},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.99,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.25,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.51,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true})
    

var elems=document.querySelectorAll(".elem");//all 3 elems are selected
elems.forEach(function(elem){
    var h1s=elem.querySelectorAll("h1");//to select all h1 in chosen elem class
    var index=0;

    var animating=false;//to stop meshing with things during animations to run animation only one time before next click event
    document.querySelector('#main').addEventListener("click",function(){
        if(!animating){
            animating=true;
        // alert();
         gsap.to(h1s[index],{
            top:'-=100%',//h1s[0] means first david chang text of div of class elem will go above by 100%
            ease:Expo.easeInOut,
            duration:1,//animation time
              onComplete:function(){//when animation is completed
            //    alert();
            gsap.set(this._targets[0],{top:"100%"});//to target the first value of current node list(array) h1s  we used this._targets[0] to place it back by 100% at its previous position
            animating=false;
            }
         });
       
          index === h1s.length-1 ?(index=0):index++;//conditional operator use in javascript
         gsap.to(h1s[index],{
            top:'-=100%',//h1s[0] means first david chang text of div of class elem will go above by 100%
            ease:Expo.easeInOut,
            duration:1,
          
         });
        }
})


})