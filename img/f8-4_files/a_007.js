KISSY.add("mui/countdown/index",function(e,t,i){function r(i,a){if(!(this instanceof r)){return new r(i,a)}this.container=t.get(i);this.config=e.merge(r.config,a);this.defaultHTML=this.container.innerHTML;this._init();return this}var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();r.config={format:"{d}\u5929{h}\u65f6{m}\u5206{s-t}\u79d2",autoFormat:true,timeToDouble:true,forceFrequency:null,_targetTime:null,_serverTime:null,rule:[],className:"mui-cd-normal"};e.augment(r,i.Target,{_init:function(){var e=(new Date).getTime(),i=this,r=i.config,n=i.container;var s=t.attr(n,"data-servertime")||r._serverTime;var m=t.attr(n,"data-targettime")||r._targetTime;if(!s&&!m){return}var u=parseFloat(m)-parseFloat(s);i._serverTime=s;i._targetTime=m;i._reminderTime=u;i._timeCount=u;var o=1e3;var f=r.forceFrequency;if(f){o=parseFloat(f)}i._frequency=o;var c=i._ruleToFormat();var h=i._formateTimerStr(c);i.container.innerHTML=i.defaultHTML+h;this._hasBiggerBit=false;var l=(new Date).getTime();var _=i._frequency-l+e;i.timer=setTimeout(function(){a(function(){clearTimeout(i.timer);i._run.apply(i)})},_)},_formateTimerStr:function(e){var t=/{([\-\w]+)}/g,i=this;i._timeStringArray=new Array;if(!t.test(e)){return'<span class="mui-cd-infor">'+e+"</span>"}e.replace(t,function(e,t,r,a){i._frequency=1e3;var n=0,s="";switch(t){case"d":n=24*60*60*1e3;break;case"h":n=60*60*1e3;break;case"m":n=60*1e3;break;case"s":n=1e3;break;case"s-t":n=1e3;i._frequency=100}var m=a.substring(r+e.length);var u=m.indexOf("{");if(-1===u){s=m}else{s=m.substring(0,u)}s='<span class="mui-cd-format mui-cd-format'+t+'">'+s+"</span>";var o=i._getTimeData(n,s,t);i._timeStringArray.push(o);return""});return i._timeStringArray.join("")},_getTimeData:function(e,t,i){var r=this._timeCount,a="";if(1e3===e&&this._frequency===100){var n=r%1e3;n=Math.floor(n/100);a=parseInt(r/e);a=this._dataToHtml(a,t,i,n)}else{a=parseInt(r/e);r-=e*a;this._timeCount=r;a=this._dataToHtml(a,t,i)}return a},_timeToDouble:function(e){if(e<10){e="0"+e}return e},_dataToHtml:function(e,t,i,r){var a="";if(this.config.timeToDouble){e=this._timeToDouble(e)}if(this.config.autoFormat){if(this._hasBiggerBit){if(r||0===r){e+="."+r}a='<span class="mui-cd-time mui-cd-time'+i+'">'+e+"</span>"+t}else{if(0===parseFloat(e)){if(r){e+="."+r;a='<span class="mui-cd-time mui-cd-time'+i+'">'+e+"</span>"+t}else{a=""}}else{if(r||0===r){e+="."+r}a='<span class="mui-cd-time mui-cd-time'+i+'">'+e+"</span>"+t;this._hasBiggerBit=true}}}else{if(r||0===r){e+="."+r}a='<span class="mui-cd-time mui-cd-time'+i+'">'+e+"</span>"+t}return a},_run:function(){var e=(new Date).getTime(),t=this;this._reminderTime-=this._frequency;if(this._reminderTime<=0){this._reminderTime=0}this._timeCount=this._reminderTime;this._hasBiggerBit=false;var i=this._ruleToFormat();var r=this._formateTimerStr(i);this.container.innerHTML=this.defaultHTML+r;var n=(new Date).getTime();var s=this._frequency-n+e;this.timer=setTimeout(function(){a(function(){clearTimeout(t.timer);t._run.apply(t)})},s);if(this._when){this._fireWhen()}if(0===this._reminderTime){this.fire("timeout");this.stop()}},_ruleToFormat:function(){var e=this.config,t=e.rule,i=t.length,r=null;if(0===i){return e.format}else{for(var a=0;a<i;a++){r=t[a];var n=r["timeRange"];var s=r["format"];var m=r["rangeControl"];var u=0;var o=null;var f="e";var c="n";if(n){u=n[0];o=n[1]}if(m){f=m[0];c=m[1]}var h=this._reminderTime;if("e"===f){if(h>=u){if(this._testEndRange(o,c,h)){this._addSpecialCls(r["className"]);return s}}}else{if(h>u){if(this._testEndRange(o,c,h)){this._addSpecialCls(r["className"]);return s}}}}this._addSpecialCls(e.className);return e.format}},_addSpecialCls:function(e){if(e){var i=this.container;var r=t.attr(i,"data-classname")||"";t.removeClass(i,r);t.addClass(i,e);t.attr(i,"data-classname",e)}},_testEndRange:function(e,t,i){if(e){if("e"===t){if(i<=e){return true}}else{if(i<e){return true}}}else{return true}return false},_fireWhen:function(){var t=this._reminderTime;var i=this._frequency;var r=this._when;var a=t-i;var n=this;e.each(r,function(e){var i=e.time>=0?e.time:0;if(i<=t&&i>a){e.fun.apply(n)}})},when:function(e){this._when=e;return this},stop:function(){clearTimeout(this.timer);return this},reset:function(){var e=this.container;var i=this.config;var r=t.attr(e,"data-servertime")||i._serverTime;var a=t.attr(e,"data-targettime")||i._targetTime;if(!r&&!a){return}var n=parseFloat(a)-parseFloat(r);this._serverTime=r;this._targetTime=a;this._reminderTime=n;this._timeCount=n;this.stop();this._run.apply(this);return this}});e.Countdown=r;return r},{requires:["dom","event"]});