function e(){console.log("hi"),window.video={modal:document.getElementById("video-modal"),openers:document.getElementsByClassName("video-modal-open"),closers:document.getElementsByClassName("video-modal-close"),players:{},youtubeId:null,youtubeStatus:"notLoaded"},video.closeModal=function(){var e=video.players[video.youtubeId];e&&"function"==typeof e.pauseVideo&&e.pauseVideo(),document.getElementsByTagName("HTML")[0].classList.remove("popup_visible"),document.getElementById("video-"+video.youtubeId)&&(document.getElementById("video-"+video.youtubeId).style.display="none"),video.modal&&(video.modal.style.display="none"),video.youtubeId=null},video.initYouTube=function(){if("notLoaded"===video.youtubeStatus){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o),video.youtubeStatus="loading",video.waitForYouTube()}},video.waitForYouTube=function(){video.interval=setInterval((function(){"loaded"===video.youtubeStatus&&(clearInterval(video.interval),video.play())}),100)},video.play=function(){var e="video-"+video.youtubeId,o=document.getElementById(e),d=document.getElementById("video-container");o?o.style.display="block":(console.log("playing with no player"),d.innerHTML+=`<div id="${e}"></div>`,video.modal.style.display="block"),video.players[video.youtubeId]?(console.log("else"),o&&(console.log("is a player now"),o.style.display="block",video.players[video.youtubeId].playVideo())):(console.log("creating new YT player"),video.players[video.youtubeId]=new YT.Player(e,{host:"https://www.youtube.com",height:"390",width:"640",videoId:video.youtubeId,events:{onReady:video.playerReady}}))},video.playerReady=function(e){e.target.playVideo()},window.onclick=function(e){e.target==video.modal&&video.closeModal()},window.onkeydown=function(e){switch(e.keyCode){case 27:document.getElementsByTagName("HTML")[0].classList.contains("popup_visible")&&video.closeModal()}};for(let e=0;e<video.openers.length;e++)video.openers[e].onclick=function(e){if(e.target.dataset&&e.target.dataset.video?video.youtubeId=e.target.dataset.video:video.youtubeId=e.target.closest("[data-video]").dataset.video,video.youtubeId){switch(video.youtubeStatus){case"notLoaded":video.initYouTube();break;case"loading":video.waitForYouTube();break;case"loaded":video.play()}document.getElementsByTagName("HTML")[0].classList.add("popup_visible"),video.modal&&(video.modal.style.display="block")}};for(let e=0;e<video.closers.length;e++)video.closers[e].onclick=video.closeModal}window.onYouTubeIframeAPIReady=function(){video.youtubeStatus="loaded"},window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e);