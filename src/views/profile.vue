<template>
    <v-app id="profile">
  <section
    id="profile"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
      <v-img src='../../src/assets/cartmanOnComputer.jpg' contain
    height="700px"
    width="750px"></v-img>
 
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
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
            <p class="h1"><strong>About Me</strong></p>
            <base-text  class="font-weight-medium"> I am trying to change fields to software engineering, although my degree is in chemistry.
I started learning with a bootcamp for front end development and I have been learning to program on my own, using Udemy and a few sites which offer more classes for I am currently doing a Ruby On Rails class. I know JavaScript, Python, HTML, CSS and Vue.
Although the majority of my  past experience has been very different from the route that I am now pursuing, there are some valuable skills that translate over. I have a lot of analytical skills from my time in research, it also honed skills for problem solving and critical thinking.
I was the project lead for a Malaria drug discovery project which allowed me to develop leadership skills. I gained experience working in teams from animal work project, all animal work was done closely with a team. I also have experience working independently from a cloning and gene-splicing project, and from my time doing polymer research.

            </base-text>
            <a href="https://github.com/HollyMaguire"> <strong>Link to My Git Hub</strong></a>

          </v-col>
        </v-row>


      </v-col>
    </v-row>
  </section>
  </v-app>
</template>
<style scoped>
#mainPage{background: rgb(170,209,208);
background: linear-gradient(90deg, rgba(170,209,208,1) 30%, rgba(176,232,231,1) 58%, rgba(214,255,250,1) 83%);}
#v-row {
    background-color: black;
}
v-app {
    background: rgb(170,209,208);
background: linear-gradient(90deg, rgba(170,209,208,1) 30%, rgba(176,232,231,1) 58%, rgba(214,255,250,1) 83%);
  font-family: arial, helvetica, sans-serif;
    color: #0d1f2d;
    margin: 0 auto;
}

header, footer {
    background-color: indianred;
    color: white;
}



caption {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 8px;
}


header, footer {
    background-color: #546a7b;
    color:black;
    height: 100px;
    text-align: right;
    padding: 30px 10px 20px 10px;
}

.h1 {font-size: 1.5em;
text-decoration-color: black;
text-align: Center}


v-container {width: 100%}
</style>



<!--<template>
  <v-app id="mainPage">
     <v-container>
                  <p>
                      <p class="h1"><strong>About Me <a href="https://github.com/HollyMaguire"> Link to My Git Hub</a></strong ></p> 
                              <p> I created this site with links to some of my projects to show what I can do so far. I am trying  to get into the computer science field, although my degree is in chemistry. </p>
                              <p> I went to Prairie View A&M to obtain my Bachelor’s degree in Chemistry. During my senior research project, I learned to use various machines and software for each. I then went to Texas A&M to work doing research, it was in this time that I first dabbled with programing. I took a liking to working with the machines, and I learned how to use and program the robots in the lab. One of these robots I frequently used had its own, but simple programing language, this is where I noticed an enjoyment for coding. I have been learning to code by doing classes on Udemy, I am currently doing a Java class. I know JavaScript, Python, HTML, CSS and Vue.</p>
                            <a href="https://picayune-jewel.surge.sh">Link to Portfolio without use of Vue</a>
              <p class="h1"><strong>Contact Me</strong> </p>            
               <p>Phone:832-620-0172</p>   
            <p>Email:hollygracemaguire@gmail.com</p> 
           
              
                  <p class="h1"><strong> Experience</strong></p> <br/>
                              <p>Although my past experience has been very different from the route that I am now pursuing, there are some valuable skills that translate over. I have a lot of analytical skills from my time in research, it also honed skills for problem solving and critical thinking. </p>
                              <p>I was the project lead for a Malaria drug discovery project which allowed me to develop leadership skills. I gained experience working in teams from the Menkes syndrome project, cryptosporidium drug study, QT prolongations studies, and cancer research. All animal work was done closely with a team, the previously mentioned projects involved the use of animals. I also have experience working independently from a cloning and gene-splicing project, and from my time doing polymer research. I gained experience, and found that am comfortable working in all types of roles, from leadership, to simply following protocols.</p>
                       
         
          
                  <p class="h1"><strong> Resume</strong></p> <br/>
                              
              <v-row>   
                           <v-img src='../../src/assets/resume.jpg' contain
    height="900px"
    width="850px"></v-img>
              </v-row>
              
      </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
#mainPage{ background-color: lightblue}
#v-row {
    background-color: black;
}
v-app {
    background-color: lightblue;
  font-family: arial, helvetica, sans-serif;
    color: #0d1f2d;
    margin: 0 auto;
}

header, footer {
    background-color: indianred;
    color: white;
}



caption {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 8px;
}


header, footer {
    background-color: #546a7b;
    color:black;
    height: 100px;
    text-align: right;
    padding: 30px 10px 20px 10px;
}

.h1 {font-size: 1.5em;
text-decoration-color: black;
text-align: Center}


v-container {width: 100%}
</style>

-->