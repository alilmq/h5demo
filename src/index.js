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
        cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
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
});
