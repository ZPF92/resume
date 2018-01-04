webpackJsonp([1],{GU3m:function(n,e){},JgnM:function(n,e){},MPzD:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("7+uW"),o=t("Dd8w"),i=t.n(o),s=t("OEdS"),l=t.n(s),a=t("NYxO"),c={name:"Editor",computed:i()({},Object(a.d)({codeInStyleTag:function(n){return"<style>"+n.currentStyle+"</style>"},highlightedCode:function(n){return l.a.highlight(n.currentStyle,l.a.languages.css)}}))},u={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:this._s(this.codeInStyleTag)}}),this._v(" "),e("pre",{domProps:{innerHTML:this._s(this.highlightedCode)}})])},staticRenderFns:[]},d=t("VU/8")(c,u,!1,function(n){t("GU3m")},"data-v-7874e4aa",null).exports,m={name:"ResumeEditor",computed:i()({},Object(a.d)(["enableHtml"]),Object(a.c)(["result"]))},h={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:this.enableHtml}},[this.enableHtml?e("div",{domProps:{innerHTML:this._s(this.result)}}):e("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]},g={name:"app",components:{StyleEditor:d,ResumeEditor:t("VU/8")(m,h,!1,function(n){t("JgnM")},"data-v-24ca197e",null).exports},methods:i()({},Object(a.b)(["progressivelyShowStyle","makeResume"])),created:function(){this.makeResume(this)}},p={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticStyle:{"font-size":"16px"},attrs:{id:"app"}},[e("audio",{ref:"music",attrs:{src:"./static/bgm.mp3",autoplay:"autoplay",loop:"loop"}}),this._v(" "),e("StyleEditor"),this._v(" "),e("ResumeEditor")],1)},staticRenderFns:[]},f=t("VU/8")(g,p,!1,function(n){t("cmUl")},"data-v-13b51634",null).exports,b=t("//Fk"),v=t.n(b),w=t("Xxa5"),y=t.n(w),k=t("exGp"),E=t.n(k),x=t("EFqf"),S=t.n(x);r.a.use(a.a);var M=document.documentElement.clientWidth>500?["/*\n* Inspired by http://strml.net/\n* 大家好，我是阿飞\n* 二月了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); \n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ \n  color: rgb(133,153,0); \n}\n.token.property{\n  color: rgb(187,137,0); \n}\n.token.punctuation{\n  color: yellow; \n}\n.token.function{ \n  color: rgb(42,161,152); \n}\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  left: 0; \n  top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; \n  right: 0; \n  top: 0;\n  padding: .5em;  \n  margin: .5em;\n  width: 48vw; \n  height: 90vh;\n  border: 1px solid;\n  background: white; \n  color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n']:["/*\n* Inspired by http://strml.net/\n* 大家好，我是阿飞\n* 二月了，好多公司都在招聘\n* 你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  left: 0; \n  top: 0;\n  transform: rotateX(-10deg) \n  translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; \n  left: 0;\n  padding: .5em;  \n  margin: 1.5vh;\n  width: 95vw; \n  height: 45vh;\n  border: 1px solid;\n  background: white; \n  color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}'],H=new a.a.Store({state:{fullStyle:M,fullMarkdown:"郑小飞\n----\n前端小白\n技能\n----\n* 前端开发(H5)\n* 微信小程序开发\n* Node.js 开发\n\n工作经历\n----\n\n1. 软通动力(外派蚂蚁金服)\n2. 天脉\n3. 数字政通\n链接\n----\n* [GitHub](https://github.com/ZPF92)\n* [我的文章](https://www.cnblogs.com/people/tween)\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！\n",currentStyle:"",currentMarkdown:"",interval:40,n:0,enableHtml:!1},getters:{result:function(n){return n.enableHtml?S()(n.currentMarkdown):n.currentMarkdown}},mutations:{changeStyle:function(n,e){var t=e.str;n.currentStyle+=t},changeResume:function(n,e){var t=e.str;n.currentMarkdown+=t},showHtml:function(n,e){n.enableHtml=!0},addN:function(n){n.n+=1}},actions:{makeResume:function(n,e){var t=this,r=n.dispatch,o=n.commit;return E()(y.a.mark(function n(){return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r("progressivelyShowStyle",e);case 2:return n.next=4,r("progressivelyShowResume",e);case 4:return n.next=6,r("progressivelyShowStyle",e);case 6:return n.next=8,o("showHtml",e);case 8:return n.next=10,r("progressivelyShowStyle",e);case 10:e.$refs.music.src="";case 11:case"end":return n.stop()}},n,t)}))()},progressivelyShowResume:function(n,e){var t=n.state,r=n.commit;return new v.a(function(n,o){var i=t.fullMarkdown,s=function(){var e=this,o=t.currentMarkdown;if(o.length<i.length){var l=o.length,a=i.substring(l,l+1);r("changeResume",{str:a}),"\n"===i.substring(l-1,l)&&this.$children[1].$refs.container&&this.$nextTick(function(){e.$children[1].$refs.container.scrollTop=1e5}),setTimeout(s,t.interval)}else n()}.bind(e);s()})},progressivelyShowStyle:function(n,e){var t=n.state,r=n.commit;return new v.a(function(n,o){var i=t.n,s=t.fullStyle[i],l=function(){var e=this;if(s){var o=t.currentStyle,a=t.fullStyle.filter(function(n,e){return e<=i}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0);if(o.length<a){var c=o.length-(a-s.length),u=s.substring(c,c+1)||" ";r("changeStyle",{str:u}),"\n"===s.substring(c-1,c)&&this.$children[0].$refs.container&&this.$nextTick(function(){e.$children[0].$refs.container.scrollTop=1e5}),setTimeout(l,t.interval)}else r("addN"),n()}}.bind(e);l()})}}});t("MPzD");new r.a({el:"#app",store:H,render:function(n){return n(f)}})},cmUl:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.566e4c71b43b5c1601be.js.map