!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verify=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r};t.verify=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=null,this.verify={},this.typeJudgeData={array:i.isArray,object:i.isObject,number:i.isNumber,string:i.isString,boolean:i.isBoolean,date:this.judgeDate},this.judgeSectionFunc={array:this.getLen,object:this.getObjLen,number:this.getNumLen,string:this.getLen,date:this.getLen}}return o(e,[{key:"init",value:function(e,t){e&&(0,i.objectLen)(t)||console.log("设置的校验数据或规则错误"),this.data=e,this.verify=t}},{key:"getLen",value:function(e){return e.length}},{key:"getObjLen",value:function(e){return Object.keys(e).length}},{key:"getNumLen",value:function(e){return e}},{key:"getType",value:function(e){return e&&e.constructor.name.toLowerCase()||"string"}},{key:"judgeDate",value:function(e){return(0,i.isArray)(e)?(0,i.isDate)(e[0])&&(0,i.isDate)(e[1]):(0,i.isDate)(e)}},{key:"validatorCallBack",value:function(e){var t=e&&e.message;return void 0!==t&&t}},{key:"judgeTop",value:function(e,t){var n=e.type?e.type:this.getType(t),r=this.typeJudgeData[n];return!(t&&r(t))}},{key:"judgeBottom",value:function(e,t){var n=e.min&&e.max,r=this.getType(t),o=this.judgeSectionFunc[r](t),i=o>=e.min&&o<=e.max;return!!n&&!i}},{key:"convertVerify",value:function(e){if((0,i.isObject)(e)){var t={top:!1,bottom:!1,message:"",key:""},n=!0,o=!1,u=void 0;try{for(var a,c=Object.keys(e)[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var l=a.value,s=r({},this.verify[l][0],this.verify[l][1]),f=this.data[l];if(s.validator?t.message=s.validator(f,this.validatorCallBack):s.required?(t.top=this.judgeTop(s,f),t.bottom=this.judgeBottom(s,f)):!s.required&&s.min&&s.max&&(t.bottom=f&&this.judgeBottom(s,f)),t.top||t.bottom||t.message)return t.key=l,alert(l),t}}catch(e){o=!0,u=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return t}}},{key:"validate",value:function(){var e=this.convertVerify(this.verify);console.log(e)}},{key:"finish",value:function(){}}]),e}(),a=document.createElement("div");a.innerHTML="<h1>Hello World h1</h1>",document.body.appendChild(a),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=(t.isNumber=function(e){return"[object Number]"===Object.prototype.toString.call(e)},t.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},t.isBoolean=function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},t.isFunc=function(e){return"[object Function]"===Object.prototype.toString.call(e)},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)});t.isNull=function(e){return"[object Null]"===Object.prototype.toString.call(e)},t.arrayLen=function(e){return r(e)&&e.length},t.objectLen=function(e){return o(e)&&Object.keys(e).length},t.isDate=function(e){return!!e&&"Invalid Date"!==new Date(e).toString()}}]);