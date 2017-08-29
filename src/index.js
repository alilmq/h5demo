import VideoPlayer from './js/videoplayer.js';
import VideoList from './js/videolist.js';
require('./css/index.css');

$(()=>{
	var player = new VideoPlayer({
	        id: 'J_prismPlayer',
	        autoplay: true,
	        isLive:false,

	        playsinline:true,
	        controlBarVisibility:'always',
	        source:"//common.qupai.me/player/qupai.mp4",
	        useH5Prism:true,
	        useFlashPrism:false,
	        cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
	        //2.0.0版本才支持
	        extraInfo:{
	        	'x5-video-player-type':'h5',
	            'x5-video-ignore-metadata':true,
	            'x5-video-player-fullscreen':true
	        }
        });
    var dataList = [{
    	url:'https://common.qupai.me/player/qupai.mp4',
    	cover:'images/cover1.png',
    	title:"分享精彩生活"
        },
        {
    	url:'http://player.alicdn.com/video/1.mp4',
    	cover:'images/cover2.png',
    	title:"多力多滋"
        },
        {
    	url:'http://player.alicdn.com/video/11.mp4',
    	cover:'images/cover3.png',
    	title:"马云讲新零售"
        }];
	VideoList.setup('videolist',dataList, player);
	function autoPlay() {
              wx.config({
                  // 配置信息, 即使不正确也能使用 wx.ready
                  debug: false,
                  appId: '',
                  timestamp: 1,
                  nonceStr: '',
                  signature: '',
                  jsApiList: []
              });
              wx.ready(function() {
                  var video=$(player.el()).find('video')[0];
                  video.play();
              });
      };
    // 解决ios不自动播放的问题
    autoPlay();
});
