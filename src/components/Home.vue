<template>
	<div class="content">
		<Slider></Slider>
	    <div class="newsList">
	    	<ul>
	    		<li v-for='(val,index) in arrList'>
	    			<router-link :to="'/article/'+val.id">
		            	<a href="conText.html">
		                    <h2>{{index+1}}.{{val.title}}</h2>
		                    <p>{{val.detail}}</p>
		                </a>
	                </router-link>	
	            </li>
		    	            
	        </ul>
	    </div>
	</div>
</template>

<script>
	
	import Slider from "./Slider.vue";
	export default {
		components : {
			Slider
		},
		data () {
			return {
				arrList : []
			}
		},
		mounted (){
			this.fetchData();
		},
		methods : {
			fetchData () {
				var that = this;

				this.$http.get("src/data/index.data").then(function(res){
					that.arrList = res.data

				}).catch(function(err){
					alert(1);

				})
			}
		}
	}

</script>
<style>
	@import "../assets/css/index.css"
</style>