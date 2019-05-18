function showCenter(obj) {
		// 可以动态计算left和top， window.onresize的时候重新计算
		//的先让盒子display：block不让得到的宽高为0；
		setStyle(obj,{
			display:"block",
			position:"absolute"
		});
		window.onresize=(function center(){
			let left=(getBodySize().width-obj.offsetWidth)/2+"px";
			let top=(getBodySize().height-obj.offsetHeight)/2+"px";
			setStyle(obj,{left,top});
		    return center;
		})();
		}
function getBodySize () {
		return {
			width: document.documentElement.clientWidth || document.body.clientWidth,
			height: document.documentElement.clientHeight || document.body.clientHeight
		}
};	
function setStyle (obj, attrJson) {
		for(var key in attrJson) {
			obj.style[key] = attrJson[key];
		}
	}