var pcFullStyle = [
    	`/*
* Inspired by http://strml.net/
* 大家好，我是阿飞
* 快国庆了，好多公司都在招聘，你是不是也在准备简历跳槽呀。
* 说做就做，我也来写一份简历！
*/
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); 
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ 
  color: rgb(133,153,0); 
}
.token.property{
  color: rgb(187,137,0); 
}
.token.punctuation{
  color: yellow; 
}
.token.function{ 
  color: rgb(42,161,152); 
}
/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; 
  left: 0; 
  top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; 
  right: 0; 
  top: 0;
  padding: .5em;  
  margin: .5em;
  width: 48vw; 
  height: 90vh;
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */
`,
          `
/* 这个简历好像差点什么
 * 对了，这是Markdown格式的
 * 我需要变成对HR更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`
];

var fullMarkdown = 
  `阿飞
----
高级前端开发工程师
技能
----
* vue.js
* 微信小程序开发
* node.js + webpack

工作经历
----

1.北京软通动力(外派蚂蚁金服)
2.北京数字政通科技股份有限公司
3.北京艾蒙特科技股份有限公司

邮箱
----
* [jsonp404@gmail.com](https://www.google.com.hk/)

链接
----
* [GitHub](https://github.com/ZPF92)
* [我的文章](https://www.cnblogs.com/tween)
> 如果你喜欢这个效果，Fork [这个的项目](https://github.com/ZPF92/resume)，打造你自己的简历！
`;
var mobileFullStyle = [
    `/*
* Inspired by http://strml.net/
* 大家好，我是阿飞
* 快国庆了，好多公司都在招聘
* 你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
/* 代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; 
  left: 0; 
  top: 0;
  transform: rotateX(-10deg) 
  translateZ(-50px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; 
  left: 0;
  padding: .5em;  
  margin: 1.5vh;
  width: 95vw; 
  height: 45vh;
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}`];
export {
  fullMarkdown,
  mobileFullStyle,
  pcFullStyle
}

