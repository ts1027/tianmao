window.onload=function(){
	//选项卡
	var btns=getClass("f5-right")[0].getElementsByTagName('li');
	var boxs=getClass("f5-bigbox")[0].getElementsByTagName("li");
	for(var i=0;i<btns.length;i++){
		btns[i].aa=i;
		btns[i].onclick=function(){
			for(var j=0;j<boxs.length;j++){
				boxs[j].style.display="none";
				btns[j].style.cssText="font-weight:'';border-bottom:'';color:'';"
			}
			boxs[this.aa].style.display="block";
			this.style.cssText="font-weight:700;border-bottom:2px solid #2f2f2f;color:#2f2f2f;"
		}
	}

//轮播
   var bigbox=getClass("f2")[0];  //大盒子
   var boxs1=getClass("bigbox-f2")[0].getElementsByTagName("li");
   var btns1=getClass("f2-yuandian")[0].getElementsByTagName("li");
   var arr1=["#FFEFCF","#E8E8E8","#C82226","#E8E8E8","#FF0066","#E9002B"];
   var index=0;
   var t=setInterval(move,3000);
   function move(){
	   	index++;
	   	if(index>boxs1.length-1){
	   			index=0;
	   	}
	   	for(var i=0;i<boxs1.length;i++){
	   		boxs1[i].style.display="none"
	   		btns1[i].style.cssText="background:'';border:2px solid rgba(255,255,255,0.2)";
	   		bigbox.style.background="";
	   	}
	   	boxs1[index].style.display="block";
	   	btns1[index].style.cssText="background:rgba(255,255,255,0.2);border:2px solid #a2a2a2";
	   	bigbox.style.background=arr1[index];
   }

 bigbox.onmouseover=function(){
  	  clearInterval(t);
  }
 bigbox.onmouseout=function(){
 	 t=setInterval(move,3000);
 }

//小按钮滑上
    for(var i=0;i<btns1.length;i++){
    	 btns1[i].aa=i;
 		 btns1[i].onmouseover=function(){
             for(var j=0;j<btns1.length;j++){
             	boxs1[j].style.display="none";
             	btns1[j].style.cssText="background:'';border:2px solid rgba(255,255,255,0.2)"
	   		    bigbox.style.background="";
             }
             boxs1[this.aa].style.display="block";
             btns1[this.aa].style.cssText="background:rgba(255,255,255,0.2);border:2px solid #a2a2a2";
	   	     bigbox.style.background=arr1[this.aa];
 		 }
 	}

}