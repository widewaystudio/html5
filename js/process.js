!function(t,o){var r,i,s,l=t(document.body),f=0;function m(t){var a=Math.floor(t/60),n=Math.floor(t%60);return a<10&&(a="0"+a),n<10&&(n="0"+n),a+":"+n}o.renderTime={allTime:function(t){o.timelist[t]&&(f=o.timelist[t],l.find(".timer").html(m(f)))},start:function(){i=i||0,s=Date.now(),function t(){var a=Date.now()+i,n=7*(a-=s)/(100*f)-100;r=requestAnimationFrame(t);var e=m(a/1e3);a/1e3<f?(l.find(".playtime").html(e),l.find(".dot")[0].style.transform="translateX("+n+"%)"):(cancelAnimationFrame(r),l.find(".playtime").html("00:00"),l.find(".dot")[0].style.transform="translateX(-100%)",l.find(".start")[0].className="start",o.audio.status="pause",o.renderTime.suspend(o.audio.status),i=0)}()},reset:function(){i=0,l.find(".playtime").html("00:00"),l.find(".dot")[0].style.transform="translateX(-100%)"},stop:function(){cancelAnimationFrame(r),i+=Date.now()-s},updata:function(t){var a=Math.floor(100*t)-100,n=Math.floor(100*t)*f/70;n=m(n),l.find(".dot")[0].style.transform="translateX("+a+"%)",l.find(".playtime").html(n)},uptime:function(t){var a=Math.floor(100*t)*f/70;i=1e3*a,o.audio.playTo(a)},suspend:function(t){var a=l.find(".cover>img")[0],n=l.find(".cover")[0];if("pause"==t){var e=getComputedStyle(a).transform,o=getComputedStyle(n).transform;n.style.transform="none"===o?e:e.concat(" ",o),a.classList.remove("rotate")}else a.classList.add("rotate")}}}(window.Zepto,window.player||(window.player={}));