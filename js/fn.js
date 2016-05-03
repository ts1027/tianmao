function getClass(classname,aa){        //调用getClass函数，传递了类名和形参
	var aa=aa||document   //逻辑表达式中的||运算，当表达式左边的元素是ture的话，就不会执行启动返回值true；当表达式左边的值为false的时候，右边无论是true和false都会返回右边的值  
    if(aa.getElementsByClassName){       //进行了布尔类型的隐式转换
    	return aa.getElementsByClassName(classname)  //转换成功则返回
    }else{
    	var arr=[];
    	var all=aa.getElementsByTagName("*")  //获取页面中所有的标签名
    	for (var i=0;i< all.length; i++){
    		if(ckeck(all[i].className,classname)){   //调用下边的ckeck的函数并传递了实参
    		     arr.push(all[i]);
    	     }
    	}	
    	return arr;
    }
}
function ckeck(newclass,oldclass){
    var xin=newclass.split(" ");   //将获取到的新字符串分割保存到新的数组；
    var flag=false;
    for (var i = 0; i < xin.length; i++) {
       if (xin[i]==oldclass) {
        flag=true;
       };
    }
    return flag;
}


//文本样式兼容属性

function getclass(obj,val){
    if(val==undefind){
        // " " || undefined
        if(obj.textContent=="string"){
            console.log("IE9-11,FiroFox,Chrome");
            return obj.textContent;
        }else{
            console.log("IE9-11,FiroFox,Chrome");
            return obj.innerText;
        }
    }else{
        if(typeof obj.textContent=="string"){
            console.log("IE9-11,FiroFox,Chrome");
            obj.textContent=val;
        }else{
             console.log("IE6-11,Chrome");
             return obj.innerText=val;
        }
    }
}