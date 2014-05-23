function MainController($scope){
	var refreshTime = 10;	//每隔多少秒自动刷新
	$scope.channels = [
		{
			"name": "湖南卫视",
			"cid":"0000000001_1342934731354",
			"text":"湖南卫视频道"
		},
				{
			"name": "广州竞赛",
			"cid":"0000000001_1342667475488",
			"text":"广州竞赛频道"
		},
				{
			"name": "广东体育",
			"cid":"gdty",
			"text":"广东体育频道"
		},
				{
			"name": "劲爆体育",
			"cid":"jbty",
			"text":"劲爆体育频道"
		},
				{
			"name": "五星体育",
			"cid":"wxty",
			"text":"五星体育频道"
		},
				{
			"name": "北京体育",
			"cid":"btv6",
			"text":"北京体育频道"
		},
				{
			"name": "湖南卫视",
			"cid":"0000000001_1342934731354",
			"text":"湖南卫视频道"
		},
				{
			"name": "湖南卫视",
			"cid":"0000000001_1342934731354",
			"text":"湖南卫视频道"
		},		
		{
			"name": "江苏卫视",
			"cid":"0000000001_1342935258488",
			"text":"江苏卫视频道"
		}
	];

	setTimeout(function(){
		window.location.reload();
	}, refreshTime * 1000)
}