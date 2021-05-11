<template>
  <v-app id="mainPage">
     <v-container>
                  <p>
                      <p class="h1"><strong>About Me <a href="https://github.com/HollyMaguire"> Link to My Git Hub</a></strong ></p> 
                              <p> I created this site with links to some of my projects to show what I can do so far. My Git Hub also has Python games included. I am trying  to get into the computer science field, although my degree is in chemistry. </p>
                              <p> I went to Prairie View A&M to obtain my Bachelor’s degree in Chemistry. During my senior research project, I learned to use various machines and software for each. I then went to Texas A&M to work doing research, it was in this time that I first dabbled with programing. I took a liking to working with the machines, and I learned how to use and program the robots in the lab. One of these robots I frequently used had its own, but simple programing language, this is where I noticed an enjoyment for coding. I have been learning to code by doing classes on Udemy, I am currently doing a Java class. I know JavaScript, Python, HTML, CSS and Vue.</p>
                            
              <p class="h1"><strong>Contact Me</strong> </p>            
               <p>Phone:832-620-0172</p>   
            <p>Email:hollygracemaguire@gmail.com</p> 
           
            
                  <p class="h1"><strong> Experience</strong></p> <br/>
                              <p>I have done some contract work with a backend engineer to do the front end parts. Although most of my past experience has been very different from the route that I am now pursuing, there are some valuable skills that translate over. I have a lot of analytical skills from my time in research, it also honed skills for problem solving and critical thinking. </p>
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
#mainPage{background: rgb(96,231,213);
background: linear-gradient(90deg, rgba(96,231,213,1) 29%, rgba(78,207,166,1) 77%, rgba(5,168,163,1) 100%);}
#v-row {
    background-color: black;
}
v-app {
    background: rgb(96,231,213);
background: linear-gradient(90deg, rgba(96,231,213,1) 29%, rgba(78,207,166,1) 77%, rgba(5,168,163,1) 100%);
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
