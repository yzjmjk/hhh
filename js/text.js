var ole = document.getElementById('le');
var olli = ole.getElementsByTagName('li');
var odiv = ole.getElementsByTagName('div');
for(var i = 0;i<olli.length;i++){
    olli[i].index = i;
    olli[i].onmouseover = function (){
        for(var i = 0;i<olli.length;i++){
            olli[i].style.background = '#fff';
            odiv[i].style.display = 'none';
        }
        this.style.background = 'pink';
        odiv[this.index].style.display = 'block';
        
    }
    olli[i].onmouseout = function (){
        
        this.style.background = '#fff';
        odiv[this.index].style.display = 'none';
    }
}
var ocon = document.getElementById('con');
var oul1 = document.getElementById('ul1');
var ouli1 = oul1.getElementsByTagName('li');
var ool1 = document.getElementById('ol1');
var ooli1 = ool1.getElementsByTagName('li');
var num = 0;
var timer = null;
function tab() {
    for(var i =0;i<ooli1.length;i++){
        ooli1[i].className = '';
    }
    ooli1[num].className = 'active';
    oul1.style.left = -ouli1[0].offsetWidth*ooli1[num].index+'px';
  }
for(var i = 0;i<ooli1.length;i++){
    ooli1[i].index = i;
    ooli1[i].onclick = function(){
        num = this.index;
       tab();
    }
}
timer=setInterval(function(){
    num++;
    if(num==ooli1.length){
        num=0;
    }
    tab();
},3000)
ocon.onmouseover = function(){
    clearInterval(timer);
}
ocon.onmouseout = function(){
    clearInterval(timer);
    timer=setInterval(function(){
    num++;
    if(num==ooli1.length){
        num=0;
    }
    tab();
},3000)
}