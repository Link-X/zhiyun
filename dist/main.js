!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.verify=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r};t.verify=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=null,this.verify={},this.typeJudgeData={array:i.isArray,object:i.isObject,number:i.isNumber,string:i.isString,boolean:i.isBoolean,date:this.judgeDate},this.judgeSectionFunc={array:this.getLen,object:this.getObjLen,number:this.getNumLen,string:this.getLen,date:this.getLen}}return o(e,[{key:"init",value:function(e,t){e&&(0,i.objectLen)(t)||console.log("设置的校验数据或规则错误"),this.data=e,this.verify=t}},{key:"getLen",value:function(e){return e.length}},{key:"getObjLen",value:function(e){return Object.keys(e).length}},{key:"getNumLen",value:function(e){return e}},{key:"judgeDate",value:function(e){return(0,i.isArray)(e)?(0,i.isDate)(e[0])&&(0,i.isDate)(e[1]):(0,i.isDate)(e)}},{key:"validatorCallBack",value:function(e){var t=e&&e.message;return void 0!==t&&t}},{key:"judgeTop",value:function(e,t){var n=this.typeJudgeData[e.type];return e.type?!(t&&n(t)):!t}},{key:"judgeBootm",value:function(e,t){var n=e.min&&e.max,r=t&&t.constructor.name.toLowerCase()||"string",o=this.judgeSectionFunc[r](t),i=o>e.min&&o<e.max;return!!n&&!i}},{key:"convertVerify",value:function(){if((0,i.isObject)(this.verify)){var e={stop:!1,message:""},t=!0,n=!1,o=void 0;try{for(var u,a=Object.keys(this.verify)[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var c=u.value,l=r({},this.verify[c][0],this.verify[c][1]),s=this.data[c];if(l.validator)try{l.validator(s,this.validatorCallBack)}catch(e){console.log(e.message)}else l.required&&(e.stop=this.judgeTop(l,s),e.stop=this.judgeBootm(l,s));if(e.stop||e.message)return alert(l.message),void alert(e.message)}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}}},{key:"finish",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.isArray=function(e){return"[object Array]"===toString.call(e)},o=(t.isNumber=function(e){return"[object Number]"===toString.call(e)},t.isString=function(e){return"[object String]"===toString.call(e)},t.isBoolean=function(e){return"[object Boolean]"===toString.call(e)},t.isFunc=function(e){return"[object Function]"===toString.call(e)},t.isObject=function(e){return"[object Object]"===toString.call(e)});t.isNull=function(e){return"[object Null]"===toString.call(e)},t.arrayLen=function(e){return r(e)&&e.length},t.objectLen=function(e){return o(e)&&Object.keys(e).length},t.isDate=function(e){return!!e&&"Invalid Date"!==new Date(e).toString()}}])});