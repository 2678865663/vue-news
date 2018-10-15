new Vue({
	el:"#app",
	data:{
		index:0,
		text:'',
		title:'',
		name:'',
		label:'',
		bool:true,
		aaa:'',
		arrs:[
			{
				"label":"美食",
				"title":"卢姥爷升仙之旅",
				"name":"Junnn",
				"time":"2018-10-12",
				"save":"2018-10-12",
				"bool":true,
				"text":"你好"
			},
			{
				"label":"美食",
				"title":"卢姥爷升仙之旅",
				"name":"Junnn",
				"time":"2018-10-12",
				"save":"2018-10-12",
				"bool":true,
				"text":"你好"
			},
			{
				"label":"美食",
				"title":"卢姥爷升仙之旅",
				"name":"Junnn",
				"time":"2018-10-12",
				"save":"2018-10-12",
				"bool":true,
				"text":"你好"
			}
		],
		Mtext:'',
		Mtitle:'',
		Mname:'',
		Mlabel:'',
		Mbool:true
	},
	computed:{
		getTime:function(){
			var date = new Date();
			Y = date.getFullYear() + '-';
			M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			D = date.getDate() + ' ';
			h = date.getHours() + ':';
			m = date.getMinutes() + ':';
			s = date.getSeconds();
			var timeChuo = Y+M+D+h+m+s;
			return timeChuo;
		}
	},
	methods:{
		add:function(){
			var a = this.title.trim();
			var b = this.name.trim();
			var c = this.text.trim();
			var d = this.label.trim();
			
			if(a == "" || b == "" || c == "" || d == ""){
				alert("请完整的填写内容");
				return false;
			}else{
				this.arrs.unshift({
					"title":this.title,
					"name":this.name,
					"label":this.label,
					"text":this.text,
					"time":this.getTime,
					"save":this.getTime,
					"bool":this.bool
				})
				
				localStorage.setItem('arrs', JSON.stringify(this.arrs))
			
				$(".model").hide();
			
				this.title = "";
				this.name = "";
				this.label = "";
				this.text = "";
			}
		},
		del:function(e){
			if(confirm("确认删除吗？")){
				this.arrs.splice(e,1)
				localStorage.setItem('arrs',JSON.stringify(this.arrs))
			}
		},
		edit:function(e){
			this.Mtitle = this.arrs[e].title
			this.Mtext = this.arrs[e].text 
			this.Mname = this.arrs[e].name
			this.Mlabel = this.arrs[e].label
			this.Mbool = this.arrs[e].bool
		},
		save:function(e){
			this.arrs[e].title = this.Mtitle
			this.arrs[e].name = this.Mname
			this.arrs[e].label = this.Mlabel
			this.arrs[e].text = this.Mtext
			this.arrs[e].save = this.getTime
			this.arrs[e].bool = this.Mbool
			
			$(".model1").hide();
			
			localStorage.setItem('arrs', JSON.stringify(this.arrs))
		},
		sss:function(e){
			this.arrs[e].bool = !this.arrs[e].bool
			
			localStorage.setItem('arrs', JSON.stringify(this.arrs))
		}
	},
	created:function(){
		if(localStorage.getItem('arrs') !== null){
			this.arrs = JSON.parse(localStorage.getItem('arrs'))
		}
	}
})