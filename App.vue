<template>
  <v-app id="app">
    <div id="nav">
      <v-btn color="lime"> <a href="https://murmuring-ocean-27727.herokuapp.com/">Profile</a></v-btn>
      <v-btn color="orange"><router-link :to="{name: 'Memory' }">Memory</router-link> </v-btn>
      <v-btn color="cyan"> <router-link :to="{ name: 'restaurant'}">Restaurant </router-link></v-btn>
       <v-btn color="teal"> <router-link :to="{ name: 'rockPaperScissors'}">rockPaperScissors </router-link></v-btn>
      <v-btn  color="yellow"><router-link :to="{ name: 'dice' }">Dice</router-link> </v-btn>
      <v-btn color="green"> <router-link :to="{ name: 'luckySevens'}">Lucky Sevens </router-link></v-btn>
      <v-btn color="purple"> <router-link :to="{ name: 'viewsMousetracking'}">Display Mouse Position </router-link></v-btn>
      <v-btn  color="blue"><router-link :to="{ name: 'countingCharacters'}"> Counting Characters</router-link></v-btn>
     <v-btn color="pink"> <router-link :to="{ name: 'findMax'}"> Find Max </router-link></v-btn>
     <v-btn  color="red"><a hred="https://github.com/HollyMaguire">GitHub</a></v-btn> 
    </div>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
