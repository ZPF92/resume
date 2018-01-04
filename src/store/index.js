import Vue from 'vue';
import Vuex from 'vuex';
import marked from 'marked';
import * as data from './modules/data';

Vue.use(Vuex);

var width = document.documentElement.clientWidth;
const fullStyle = width > 500 ? data.pcFullStyle : data.mobileFullStyle;
const fullMarkdown = data.fullMarkdown;

var store = new Vuex.Store({
	state:{
		fullStyle,
		fullMarkdown,
		currentStyle: '',
		currentMarkdown:'',
		interval: 40,
		n:0,
        enableHtml: false,
	},
	getters:{
		result(state){
			return state.enableHtml ? marked(state.currentMarkdown) : state.currentMarkdown;
		}
	},
	mutations:{
		changeStyle(state,{str}){
			state.currentStyle += str;
		},
		changeResume(state,{str}){
			state.currentMarkdown += str;
		},
		showHtml(state,_this){
			state.enableHtml = true;
		},
		addN(state){
			state.n += 1;
		}
	},
	actions:{
		async makeResume({dispatch,commit},_this){
			await dispatch('progressivelyShowStyle',_this);
			await dispatch('progressivelyShowResume',_this);
			await dispatch('progressivelyShowStyle',_this);
			await commit('showHtml',_this);
			await dispatch('progressivelyShowStyle',_this);
			_this.$refs.music.src = '';
		},
		progressivelyShowResume({state,commit},_this){
			return new Promise((resolve,reject) => {
				let {fullMarkdown} = state;
				let showResume = (function(){
					let {currentMarkdown} = state;
					if (currentMarkdown.length < fullMarkdown.length) {
						var l = currentMarkdown.length;
						var str = fullMarkdown.substring(l,l+1);
						commit('changeResume',{
							str
						});	
						if (fullMarkdown.substring(l-1, l) === '\n' && this.$children[1].$refs.container) {
			                this.$nextTick(() => {
			                  this.$children[1].$refs.container.scrollTop = 100000;
			                });
			            }
          				setTimeout(showResume,state.interval);
					}else{
						resolve();
					}
				}).bind(_this);
				showResume();
			});
		},
		progressivelyShowStyle({state,commit},_this){
			return new Promise((resolve,reject) => {
				let n = state.n;
				let style = state.fullStyle[n];
				let showStyle = (function(){
					if(!style){
						return;
					}else{
						let currentStyle = state.currentStyle;
						let length = state.fullStyle
							.filter((_, index) => index <= n)
							.map((item) => item.length)
							.reduce((p, c) => p + c, 0);
						if(currentStyle.length < length){
							let l = currentStyle.length - (length - style.length) 
              				let str = style.substring(l,l + 1) || ' ';
              				commit('changeStyle',{
              					str
              				});
              				if (style.substring(l-1, l) === '\n' && this.$children[0].$refs.container) {
				                this.$nextTick(() => {
				                  this.$children[0].$refs.container.scrollTop = 100000;
				                });
				            }
              				setTimeout(showStyle,state.interval);
						}else{
							commit('addN');
							resolve();
						}
					}
				}).bind(_this);
				showStyle();
			});	
		}		
	},

});

export default store;
