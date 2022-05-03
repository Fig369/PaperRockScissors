class PaperRockScissors{
    constructor(){
    }
    paper(){
        var bot = Math.floor(Math.random() * 3);
        if(bot == 0){
         var computerChoice = 'scissors';
         var result = 'loss';
         console.log(computerChoice, result);}
        if(bot == 1){
          var computerChoice = 'paper';
          var result = 'tie';
          console.log(computerChoice, result);}
        if(bot == 2){
          var computerChoice = 'rock';
          var result= 'win'
          console.log(computerChoice, result);
        }
      }
    rock(){
        var bot = Math.floor(Math.random() * 3);
        if(bot == 0){
         var computerChoice = 'paper';
         var result = 'loss';
         console.log(computerChoice, result);}
        if(bot == 1){
          var computerChoice = 'rock';
          var result = 'tie';
          console.log(computerChoice, result);}
        if(bot == 2){
          var computerChoice = 'scissors';
          var result = 'win';
          console.log(computerChoice, result);}
        }
    scissors(){
        var bot = Math.floor(Math.random() * 3);
        if(bot == 0){
         var computerChoice = 'rock';
         var result = 'loss';
         console.log(computerChoice, result);
        }
        if(bot == 1){
          var computerChoice = 'scissors';
          var result = 'tie';
          console.log(computerChoice, result);
        }
        if(bot == 2){
          var computerChoice = 'rock';
          var result = 'win';
          console.log(computerChoice, result);
        }
  }
}


module.exports.PaperRockScissors = PaperRockScissors;

