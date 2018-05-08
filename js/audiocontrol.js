/*
* @Author: Think
* @Date:   2018-03-30 12:11:14
* @Last Modified by:   Think
* @Last Modified time: 2018-04-04 13:40:29
*/
(function($,root){
	var $scope = $(document.body);
	root.timelist = [];
	function audioControl(){
		this.audio = new Audio();
		this.status = "pause";
	}
    audioControl.prototype = {
    	play:function(){
    		this.audio.play();
    		this.status = "play";
    		$scope.find(".start")[0].className = "start stop";
            root.renderTime.suspend(this.status); 
    	},
    	pause:function(){
    		this.audio.pause();
            this.status = "pause";
             $scope.find(".start")[0].className = "start";
             root.renderTime.suspend(this.status); 
    	},
    	getAudio:function(src,i){
    		this.audio.src = src;
    		this.audio.preload = "auto";    	
    		this.audio.load();   
    	    this.audio.onloadedmetadata = function(){
    	    	if(!root.timelist[i]){
    	    		root.timelist[i] = this.duration;    	    	   
    	    	}
    	    	 root.renderTime.allTime(i);
    	    };
    	    
    	},
    	playTo:function(time){
    		this.audio.currentTime = time;
    		this.audio.play();
    		this.status = "play";
    	    $scope.find(".start")[0].className = "start stop";
            root.renderTime.suspend(this.status); 

    	},
       renderer:function(state){
       	if(state == "play"){
      	 root.renderTime.stop();
      	 root.renderTime.reset();
      	 $scope.find(".start")[0].className = "start stop";
         root.renderTime.suspend(state);            
 		 this.play();
 		 root.renderTime.start();
      }else{
      	     $scope.find(".start")[0].className = "start";
             root.renderTime.suspend(state); 
 			 root.renderTime.reset();
      }
       }

    }

   
    root.audioControl = audioControl;

}(window.Zepto,window.player || (window.player = {})))