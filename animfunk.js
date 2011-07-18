/**
* animfunk is a set of normalised animation functions - siouxcore@gmail.com
* animfunk is under MIT license
* version : 0.1.20110718.1
* Requirement : functions f(x) must have x from [0,1] and f(0) = 0 and f(1) = 1, f(x) is not necessarily in [0,1] (spring effect for instance)
* change : adding spring
**/
(function (){
  var animfunk = {
    linear: function(x){
      return x;
    },
    sin: function(x){
      return Math.sin(x * Math.PI / 2);
    },
    sinsq: function(x){
      return Math.sin(Math.pow(x,0.5) * Math.PI / 2);
    },        
    asinp2: function(x){
      return Math.pow( 2 * Math.asin(x) / Math.PI, 2);
    },            
    sinp2: function(x){
      return Math.sin(Math.pow(x,2) * Math.PI / 2);
    },            
    sinp4: function(x){
      return Math.sin(Math.pow(x,4) * Math.PI / 2);
    },            
    cos: function(x){
      return 1 - Math.cos(x * Math.PI / 2);
    },    
    cossq2: function(x){
      return 1 - Math.cos(Math.pow(x,0.25) * Math.PI / 2);
    },        
    cosp2: function(x){
      return 1 - Math.cos(Math.pow(x,2) * Math.PI / 2);
    },     
    spring: function(x){
        if(x < .5)
          return Math.sin(x * Math.PI ) * 1.1;
        return Math.sin(this.map(x,.5,1,Math.PI / 2, 6*Math.PI/2)) * this.map(x,.5,1,.1,.05) + 1;
      },    
    map: function(value, istart, istop, ostart, ostop){
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
  };
  // shortcut
  if(!window.animfunk){window.animfunk = animfunk;}
})();