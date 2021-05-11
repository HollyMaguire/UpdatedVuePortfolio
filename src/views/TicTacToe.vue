<template>
<v-app id="ticTacToe">
  <h1>Click on the board to start, you are X</h1>
  
  <v-container >
<v-row><button @click="changeGameState" class="box">{{gameState[0][0]}}</button> <span class="box">{{gameState[0][1]}}</span> <span class="box">{{gameState[0][2]}}</span></v-row>
<v-row><span class="box">{{gameState[1][0]}}</span> <span class="box">{{gameState[1][1]}}</span> <span class="box">{{gameState[1][2]}}</span></v-row>
<v-row><span class="box">{{gameState[2][0]}}</span> <span class="box">{{gameState[2][1]}}</span> <span class="box">{{gameState[2][2]}}</span></v-row>
  </v-container>

  
 
</v-app>

</template>
<script>
  //import Board from "../components/Board";
  //import box from "../components/box";
  
  export default {
    el: '#ticTacToe',
    data() { return {
      gameOver: false,
      gameOverText: '',
      gameState: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    } },
    
    methods: {
      changeGameState() {
      this.gameState[0][0] = 'an other thing'
    },
      MakeMove(x, y) {
        if (this.gameOver) {
          return;
        }
        if (! this.board.doMove(x, y, 'X')) {
          
          return;
        }
        this.$forceUpdate();
        if (this.board.gameOver()) {
          this.gameOver = true;
          this.gameOverText = this.board.winning('X') ? 'You win!' : 'Tie';
          return;
        }
        let aiMove = this.minimax(this.board.clone(), 'O');
        this.board.doMove(aiMove.move.x, aiMove.move.y, 'O');
        if (this.board.gameOver()) {
          this.gameOver = true;
          this.gameOverText = this.board.winning('O') ? 'Loser!' : 'Draw';
        }
        this.$forceUpdate();
      },
      minimax(board, player, depth = 1) {
       
        if (board.gameOver()) {
          return {
            score: board.getScore() + depth,
            move: null
          }
        }
    
        let bestScore = player === 'O' ? -10000 : 10000;
        let bestMove = null;
        let moves = board.getPossibleMoves();
        for (let i = 0; i < moves.length; i++) {
          let move = moves[i];
          let newBoard = board.clone();
          newBoard.doMove(move.x, move.y, player);
          const score = this.minimax(newBoard, player === 'X' ? 'O' : 'X', depth + 1).score;
          if ((player === 'O' && score > bestScore) || (player === 'X' && score < bestScore)) {
            bestScore = score;
            bestMove = move;
          }
        }
        return {
          score: bestScore,
          move: bestMove
        }
      }
    }
  }
</script>
<style>
    #ticTacToe {background-color:rgb(77, 213, 255)
}
  .ticTacToeBoard {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
  }

.box {
    width: 150px;
    height: 150px;
    border: 8px solid black;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #X {
    color:rgb(37, 231, 31);
  }
  #O {
    color:grey;
  }
  #X,#O {
    position: relative;
    top: -6px;
    font-weight: bold;
    font-size: 48px;
  }

</style>
