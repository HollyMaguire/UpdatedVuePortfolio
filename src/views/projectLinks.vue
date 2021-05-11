<template>
    <v-app id="projects">
  <section
    id="projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6">
        
 <v-img src='../../src/assets/resume.jpg' contain
    height="800px"
    width="750px"
    ></v-img>
 
      </v-col>

      <v-col
      
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
  
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
          <div id="sample">
            <p  class="h1" ><strong> Sample Projects</strong></p>
            <p  class="font-weight-medium">  I created this site with links to some of my projects to show what I can do so far. I am still trying to learn more tech stacks and am always eagar to learn. There is a link to my GitHub above which also contains projects in Python and Ruby.

            </p>
</div>

<div id="contact">
         <p class="h1"> <strong>Contact Me</strong></p>
           <p  class="font-weight-medium"> Email: Hollygracemaguire@gmail.com
           <br> Phone: 832-620-0172 
            </p>
</div>
          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </section>
  </v-app>
</template>

<script>
  
</script>
<style scoped>
v-app{ background: rgb(96,231,213);
background: linear-gradient(90deg, rgba(96,231,213,1) 29%, rgba(78,207,166,1) 77%, rgba(5,168,163,1) 100%);}
#projects{ background: rgb(96,231,213);
background: linear-gradient(90deg, rgba(96,231,213,1) 29%, rgba(78,207,166,1) 77%, rgba(5,168,163,1) 100%);}
#v-row {
    background-color: black;}
    v-container {width: 100%}
.h1 {font-size: 1.5em;
text-decoration-color: black;
text-align: Center}


</style>
