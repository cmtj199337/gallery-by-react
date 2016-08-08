//css
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关json
var imageDatas = require('../data/imageData.json');



//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDataArr){
	for(var i = 0;i <imageDataArr.length;i++){
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/'+singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);

var ImgFigure = React.createClass({
	render:function(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL} alt={this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
});


var GalleryByReactApp = React.createClass({
  render:function() {

  	var controllerUnits = [],
  		imgFigures = [];
  	imageDatas.forEach(function(value){
  		imgFigures.push(<ImgFigure data={value}/>);
  	});

    return (
      <section className="stage">
      	<section className="img-sec">
      		{imgFigures}
      	</section>

      	<nav className="controller-nav">
			{controllerUnits}
      	</nav>
      </section>
    );
  }
});

module.exports = GalleryByReactApp;
