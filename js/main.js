/**
 * @author huajiang
 */
function Animal(){
	this.spies = "动物";
}
var obj = document.getElementById("huajiang");
var str = Object.prototype.toString.apply(obj);
console.log(str);
console.log(str.indexOf("html"));

var checker= {
	isString : function(obj){
		return Object.prototype.toString.apply(obj) === '[object String]';
	},
	isNumber : function(obj){
		return Object.prototype.toString.apply(obj) === '[object Number]';
	},
	isArray : function(obj){
		return Object.prototype.toString.apply(obj) === '[object Array]';
	},
	isFunction : function(obj){
		return Object.prototype.toString.apply(obj) === '[object Function]';
	},
	isObject : function(obj){
		return Object.prototype.toString.apply(obj) === '[object Object]';
	},
	isBoolean: function(obj){
		return Object.prototype.toString.apply(obj) === '[object Boolean]';
	},
	isDate :function(obj){
		return Object.prototype.toString.apply(obj) === '[object Date]';
	},
	//是否是HTML元素
	isHtml : function(obj){
		return Object.prototype.toString.apply(obj) === '[object HTMLElement]';
	},
	//获取对象类型字符串
	getType : function(obj){
		return Object.prototype.toString.apply(obj);
	}
}

(function (){}());
(function(){})();

