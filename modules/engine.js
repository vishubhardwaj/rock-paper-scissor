const engine = {
    choices : {
        ROCK:'Rock',
        PAPER:'Paper',
        SCISSOR:'Scissor',
        LIZARD:'Lizard',
        SPOCK:'Spock'
    },
    score : {
        WINS:0,
        LOSS:0,
        DRAW:0,
        INVALID:0
    },
    getcomputerSelection: function(){
        const keys      =   Object.keys(this.choices);
        const randIndex =   this.random(keys.length);
        return this.choices[keys[randIndex]];
    },
    playRound:function(computerSelection, playerSelection){
        // plays one round of game and decides a score
        // lists includes the choices defeated by the respective key
        const rules = {
            SCISSOR :   [this.choices.PAPER, this.choices.LIZARD],
            PAPER   :   [this.choices.ROCK, this.choices.SPOCK],
            ROCK    :   [this.choices.LIZARD, this.choices.SCISSOR],
            LIZARD  :   [this.choices.SPOCK, this.choices.PAPER],
            SPOCK   :   [this.choices.SCISSOR, this.choices.ROCK]
        };
        if (playerSelection === computerSelection){
            return this.score.DRAW++;
        };
        return (rules[playerSelection].includes(computerSelection))?this.score.WINS++:this.score.LOSS++
    },
    random: function(max=1, min=0){
        return Math.floor(Math.random() * (max-min)+min);
    },
    chooseWinner:function(){
        // chooses win or lose based on this.score
        if(this.score.WINS > this.score.LOSS){return this.msg('win')}
        else if(this.score.WINS == this.score.LOSS){return this.msg('draw')}
        return this.msg('lose')
    },
    msg : function (condition){
        // returns a random msg based on win condition
        const msgs = {
            win     :   [
                "winner",
                "chicken dinner",
                "You're the man"
            ],
            lose    :   [
                "boo hooo", 
                "loserrrrrr", 
                "Piss off suckaaaa"
            ],
            draw    :   [
                "It's a drawwwww", 
                "Boooooring", 
                "aaahhhh"
            ],
            invalid :   [
                "Are you thick?",
                "forgot how to spell?",
                "Even god can't fix you"
            ]
        }
        return msgs[condition][this.random(msgs[condition].length)]
    },
};

export default engine;