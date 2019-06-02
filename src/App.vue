<template>
	<div>
  <div id="app">
    <div id="nav">
			<div class="l">
				<router-link to="/">Logo</router-link>
			</div>
			<div class="l">
				<router-link to="/logo">Home按钮</router-link>
			</div>
			<div class="l">
				<router-link to="/text">Text按钮</router-link>
			</div>
			<div class="l">
				<router-link to="/chat">Chat按钮</router-link>
			</div>
    </div>
    <router-view/>
  </div>
	<div class="footer">footer</div>
	</div>
</template>

<script>
	export default{
		methods:{
			Click1(){
				this.shows = 1;
			},
			Click2(){
				this.shows = 2;
			},
			Click3(){
				this.shows = 3;
			},
			Click4(){
				this.shows = 4;
			}
		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
.hover{
	background-color: #42b983;
	color: #000000;
}
#app {
	width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
	background-color: #f40;
  color: #2c3e50;
}
.l{
	float: left;
	width: 200px;
	line-height: 50px;
	text-align: center;
}
#nav {
	width: 800px;
	height: 50px;
	margin: 0 auto;
  a {
    font-weight: bold;
    color: #2c3e50;
		text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.footer{
	height: 150px;
	width: 100%;
	background-color: yellow;
	text-align: center;
	line-height: 150px;
}
</style>
