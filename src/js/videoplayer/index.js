require('./index.css');
export default class VideoPlayer
{
	constructor(props) {
		this.player;
		this.props = props;
		this._setup();
		this._bindEvent();
		this._firstFullscreen = true;
	}

	loadByUrl(url)
	{
		if(this.player)
			this.player.loadByUrl(url);
	}

	dispose()
	{
		if(this.player)
		{
			this.player.dispose();
			Zepto('#'+this.props.id).empty();
		}
	}

    _setup()
	{
		this.player = new Aliplayer(this.props);
	}

	_bindEvent()
	{
		let that = this;
		this.player.on('ready',  (e)=>{
            console.log('ready');
        });

        this.player.on('play',(e)=>{
            console.log('play');

        });

        this.player.on('ended',(e)=>{
            console.log('ended');

            });
        this.player.on('pause',(e)=>{
            console.log('pause');

            });
    
        this.player.on('requestFullScreen', (e)=>{
        	if(that._firstFullscreen)
        	{
        		that.player.cancelFullScreen();
        		that._firstFullscreen = false;
        	}
        	else
        	{
        	    let video=$(that.player.el()).find('video');
        	    video.addClass('center');
        	}
        });

        this.player.on('x5cancelFullScreen',(e)=>{
        	let service = that.player.fullscreenService;
        	if(service.getIsFullScreen())
        	{
        		service.cancelFullScreen()
        	}
        });

        this.player.on('cancelFullScreen', (e)=>{
        	let video=$(that.player.el()).find('video');
        	video.removeClass('center');
        })

		$(document).on('WeixinJSBridgeReady',()=>{ 
		   	let video=$(that.player.el()).find('video')[0];
		    video.play();
		});
	}

	_unbindEvent()
	{
		let that = this;
		this.player.off('ready',function  (e) {
		// 解决ios不自动播放的问题
		if($.os.ios)
		   that._autoPlay();
        console.log('ready');

        });

        this.player.off('play',function  (e) {
            console.log('play');

            });

        this.player.off('ended',function  (e) {
            console.log('ended');

            });
        this.player.off('pause',function  (e) {
            console.log('pause');

            });
	}
}