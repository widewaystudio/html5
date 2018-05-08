/*
* @Author: Think
* @Date:   2018-03-29 21:21:27
* @Last Modified by:   Think
* @Last Modified time: 2018-03-30 15:58:14
*/
(function($,root){
	function controlIndex(len){
		this.index = index;
		this.len = len;
	}
	
	controlIndex.prototype ={
		pre:function(){
			return this.getIndex(-1);
		},
		next:function(){
          return this.getIndex(1);
		},
		getIndex :function(val){
			var index = this.index;
			var len = this.len;
			var curIndex = (index + len + val) % len;
			this.index = curIndex;
			return curIndex;
		}
	}
  
	root.controlIndex = controlIndex;

}(window.Zepto,window.player ||(window.player = {})));