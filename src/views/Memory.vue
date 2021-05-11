<template>
  <v-app id="Memory">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <div> 
        <h1> Click on the cards to flip them, then match the images</h1>
    
     </div>
    <div class="row">
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[0]' :clicked = 'click'></card>
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[1]' :clicked = 'click'></card>
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[2]' :clicked = 'click'></card>
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[3]' :clicked = 'click'></card>
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[4]' :clicked = 'click'></card>
        <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[5]' :clicked = 'click'></card>   
</div>
 <div class="row">
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[6]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[7]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[8]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[9]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[10]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[11]' :clicked = 'click'></card>
</div>
<div class="row">
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[12]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[13]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[14]' :clicked = 'click'></card>
    <card @isClicked = "cardsClicked" backImg = "card" :faceImg='randomArray[15]' :clicked = 'click'></card>
</div>
   
    </v-app>
</template>
<script>
import card from "../components/Card"
import { EventBus } from '../components/eventBus.js';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


export default {
    created() {
        shuffleArray(this.randomArray)

    },

    el: '#Memory',
    methods: {
        cardsClicked(name){
             this.clickedArray.push(name);
             
             if (this.clickedArray.length >= 2){
                if (this.clickedArray[0] == this.clickedArray[1]){
                    this.match(name)
                    EventBus.$emit('doubleClick', name)
                    
                }
                else {
                    this.noMatch(name)
                    EventBus.$emit('doubleClick', null);
                }
                
                this.clickedArray = []
              
             }
        },
        match(name){
this.results = `there is a match ${name}`
        },
        noMatch(name){
this.results = `there is not a match  ${name}`
        },
        
        },
        

 components: {
    card
  },

  
    data () 
    { return{
            click: false,
            results: '',
            clickedArray: [],
            randomArray: ["d0","d0","d1","d1","d2","d2","d3","d3","d4","d4","d5","d5","d6","d6","d7","d7"],
            
            Cards: [
                 {
                    name: 'd0',
                    

                },
                {
                    name: 'd1',
                   

                },
                {
                    name: 'd2',
                   
 
                },
                {
                    name: 'd3',
                    

                },
                {
                    name: 'd4',
                   

                },
                {
                    name: 'd5',
                   

                },
                {
                    name: 'd6',
        

                },
                {
                    name:'d7',
                
                },
            ],
            
    }}
  }
</script>

    
<style scoped>
.FaceImg{
  width: 200;
  height: 200;
  
}
.BackImg{
  width: 200;
  height: 200;
  
}


#Memory {background: rgb(75,240,252);
background: radial-gradient(circle, rgba(75,240,252,1) 0%, rgba(115,190,218,1) 35%);
}
</style>
