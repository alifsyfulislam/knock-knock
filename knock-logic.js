$('.alf_knock_video').css({opacity: 0});
$('.alf_knock_door, .alf_knock_door_here,.alf_knock_door_knock_1,.alf_knock_door_knock_2').click(()=>{
    console.log(0);
    makeKnock();
    $('.alf_knock_door').addClass("door_open");
    setTimeout(()=>{
        $('.alf_knock_door').hide();
        $('.alf_knock_frame').css({ transform: "translateX(-300px) scale(7)"});
        makeVideo()
    },2000);
});

function makeKnock() {
    $('.alf_knock_door_here').hide(100);
    $('.alf_knock_door_knock_1').hide(100);
    $('.alf_knock_door_knock_2').hide(100);
}

function makeVideo() {
    $('.alf_knock_video').animate({
        opacity: '1',
    },1500);
    $('.alf_knock_frame').css({zIndex: 2});
    setInterval(()=>{
        $('.alf_knock_video').css({zIndex: 8});
    },500);
}




let Container = document.querySelector("#video-container");
var tag = document.createElement('script');
var isPlay = false;
let played = true;
let device = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 'mobile' : 'desktop';

tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


document.querySelector("#ytplayer").src="https://www.youtube.com/embed/GjBlcEz1s_o?rel=0&autoplay=1&controls=0&enablejsapi=1&playerapiid=ytplayer&loop=1&playlist=fjSQvEVbQ5w";


var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onStateChange': ShowMe,
            'onReady': onPlayerReady
        }
    });
}

function ShowMe() {
    var sStatus;
    sStatus = player.getPlayerState();
    if (sStatus == 0) {
        if(isPlay){
            player.stopVideo();
        }
    } else if (sStatus == 1) {
        if (played) {
            played=false;
            if (device=='mobile') {
                trackingVideo(device);
            }

        }
    } else if (sStatus == 2) {
        // console.log('paused');
    } else if (sStatus == 3) {
        // console.log('buffering');
    } else if (sStatus == 5) {
        // console.log('cued');
    }
}

if( device=='desktop' ) {
    function onPlayerReady(event) {
        event.target.mute();
    }
    Container.addEventListener('mouseover', function(){
        if(player.isMuted()){
            player.unMute();
            trackingVideo(device);
        }
    });
}



