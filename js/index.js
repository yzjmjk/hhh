
    var ole = document.getElementById('le');
    var olli = ole.getElementsByTagName('li');
    var odiv = ole.getElementsByTagName('div');
    for(var i = 0;i<olli.length;i++){
        olli[i].index = i;
        olli[i].onmouseover = function (){
            for(var i = 0;i<olli.length;i++){
                olli[i].style.background = '#fff';
                odiv[i].style.display = 'none';
                olli[i].style.color = 'black'
            }
            this.style.background = 'grey';
            olli[this.index].style.color = '#fff';
            odiv[this.index].style.display = 'block';
            
        }
        olli[i].onmouseout = function (){
            for(var i = 0;i<olli.length;i++){
                olli[i].style.background = '#fff';
                odiv[i].style.display = 'none';
                olli[i].style.color = 'black'
            }
            this.style.background = '#fff';
            odiv[this.index].style.display = 'none';
        }
    }


    var orot = document.getElementById('rot');
    var oul = document.getElementById('ul');
    var ool = document.getElementById('ol');
    var oli = ool.getElementsByTagName('li');
    for(var i = 0;i < oli.length;i++){
        oli[i].index = i;
        oli[i].onclick = function(){
            for( var i =0; i<oli.length;i++){
                oli[i].className = '';
            }
            this.className = 'action';
            oul.style.left = - 416*this.index + 'px';
        }
    }
    var oul1 = document.getElementById('ul1');
    var oli1 = oul1.getElementsByTagName('li');
    var oul2 = document.getElementById('ul2');
    var oli2 = oul2.getElementsByTagName('li');
    for(var i =0;i<oli1.length;i++){
        oli1[i].index = i;
        oli1[i].onclick = function(){
            for(var i =0;i<oli1.length;i++){
                oli1[i].className = '';
                oli2[i].style.display = 'none';
            }
            this.className = 'active';
            oli2[this.index].style.display = 'block';
        }
    }
    var oul3 = document.getElementById('ul3');
    var oli3 = oul3.getElementsByTagName('li');
    var oul4 = document.getElementById('ul4');
    var oli4 = oul4.getElementsByTagName('li');
    for(var i = 0; i<oli3.length;i++){
        oli3[i].index = i;
        oli3[i].onclick = function () {
            for(var i = 0;i<oli3.length;i++){
                oli3[i].className = '';
                oli4[i].style.display = 'none';
            }
            this.className = 'active';
            oli4[this.index].style.display = 'block';

          }
    }
