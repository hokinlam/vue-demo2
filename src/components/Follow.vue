<template>
	<div class="content mt30">
	    <div class="newsList">
	    	<ul>
	           	<li v-for='(val,index) in arrList'>
	    			<router-link :to="'/article'+val.id">
		            	<a href="conText.html">
		                    <h2>{{val.title}}</h2>
		                    <p>{{val.detail}}</p>
		                </a>
	                </router-link>	
	            </li>          
	        </ul>
	    </div>
	</div>
</template>

<script>
	export default {
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

				this.$http.get("/src/data/follow.data").then(function(res){
					that.arrList = res.data

				}).catch(function(err){
					alert(1);

				})
			}
		}
	}
</script>

<style scoped>
	.mt30{
		margin-top : 30px;
	}
</style>