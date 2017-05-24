
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    controls: 0,
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0
    }
  });


}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  var vol;
  $('#vol_txt').html("音量：" + event.target.getVolume());
  $('#play').click(function(){
    event.target.playVideo();
  });
  $('#stop').click(function(){
    event.target.pauseVideo();
  });
  $('#vol_up').click(function(){
    vol = player.getVolume() + 5;
    player.setVolume(vol);
    $('#vol_txt').html("音量：" + vol);
  });
  $('#vol_down').click(function(){
    vol = player.getVolume() - 5;
    player.setVolume(vol);
    $('#vol_txt').html("音量：" + vol);
  });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
  }
}
function stopVideo() {
  player.stopVideo();
}
