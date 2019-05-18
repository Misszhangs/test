//以面向对象的方式
function Fabu(){
	this.btn=document.querySelector("#btn");
	this.container=document.querySelector("#container");
	this.time=new Date();
	 this.dd = this.time.getDate();
	this.mm = this.time.getMonth()+1; 
	this.yyyy = this.time.getFullYear();
	this.hour = this.time.getHours();
	this.minutes = this.time.getMinutes() ;
	this.seconds = this.time.getSeconds();	
	this.now=this.yyyy+"年/"+this.mm+"月/"+this.dd+"日/"+this.hour+"时/"+this.minutes+"分/"+this.seconds+"秒"
	console.log(this.now);
	this.bindEvent();
	
}
//将所有的方法写到原型上
Fabu.prototype={
	constructor:Fabu,//将Login的构造器指向Login
	//为btn捆绑点击事件
	bindEvent:function(){
		this.btn.onclick = function () {
			this.popBox();
		}.bind(this);
	//给删除按钮和登录按钮捆绑事件，由于他们只能能box显示出来才能帮事件，所以就将事件委托到this.container上
		this.container.onclick=function(e){
			switch(e.target.id)
			{
				case "closeBtn":this.closeBtn();break;
				case "issue":this.issue();break;
			}
		}.bind(this);
	},
	//封装一个点击按钮之后的函数
	popBox:function(){
	//让登录页面显示出来
	this.container.innerHTML='<h4>发布</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label>用户名：<input id="username" type="text"></label></p><p><label>内容:<textarea  rows="10" cols="5" id="content" class="content"></textarea></label></p><p><button id="issue" class="issue" type="button">发布</button></p>';
	//创建model遮蔽框
	showCenter(this.container);//让遮盖成居中
	this.modal=document.createElement("div");
	this.modal.className="modal";
	document.body.appendChild(this.modal);
	},
	closeBtn:function(){
		//隐藏this.container
		this.container.style.display="none";
		//删除modal
		this.modal.remove();
	},
	//让内容显示在页面上
	issue:function(){
		this.content=container.querySelector("#content");
		this.username=container.querySelector("#username");
		this.username.value=this.username.value;
		this.content.value=this.content.value;
		
		if(this.username.value==""||this.content.value=="")
		{
			alert("你的用户名和内容不能为空");
		}
		else
		{
			this.div=document.createElement("div");
			this.div.style.border="1px solid red";
			this.div.width="500px";
			this.div.id="weibo";
			this.div.innerHTML=`${this.content.value}<br/>${this.now}`;
			document.body.appendChild(this.div);
			this.weibo=document.querySelector("#weibo");
			console.log(this.weibo);
			this.container.style.display="none";
			this.modal.remove();
		}
		
	}
}
new Fabu();

	