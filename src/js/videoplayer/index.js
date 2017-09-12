
export default class VideoPlayer
{
	constructor(props) {
		this.player;
		this.props = props;
		this._setup();
		this._bindEvent();
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
		this.player = new prismplayer(this.props);
	}

	_bindEvent()
	{
		var that = this;
		this.player.on('ready',function  (e) {
            console.log('ready');
        });

        this.player.on('play',function  (e) {
            console.log('play');

        });

        this.player.on('ended',function  (e) {
            console.log('ended');

            });
        this.player.on('pause',function  (e) {
            console.log('pause');

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

	_autoPlay() {
		let that = this;
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
	          var video=$(that.el()).find('video')[0];
	          video.play();
	      });
      };
}