
export default class VideoPlayer
{
	constructor(props) {
		this.player;
		this.props = props;
		this._setup();
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
		this.player.on('uiReady',function  (e) {
        console.log('uiReady');

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
		this.player.off('uiReady',function  (e) {
        console.log('uiReady');

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