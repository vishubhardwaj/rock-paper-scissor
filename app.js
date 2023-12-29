const engine = {
    choices : ['Rock', 'Paper', 'Scissor'],
    score : {
        'wins':0,
        'lose':0,
        'draw':0,
        'invalid':0
    },
    msg : function (condition){
        const msgs = {
            win: ["winner","chicken dinner","You're the man"],
            lose: ["boo hooo", "loserrrrrr", "Piss off suckaaaa"],
            draw: ["It's a drawwwww", "Boooooring", "aaahhhh"],
            invalid: ["Are you thick?", "forgot how to spell?", "Even god can't fix you"]
        }
        return msgs[condition][this.random(msgs[condition].length)]
    },
    getcomputerSelection: function(){
        const randIndex = Math.floor(Math.random()*this.choices.length)
        return this.choices[randIndex]
    },
    validateInput:function(input){
        try {
            let choice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            console.log('VALIDATION TEST :' + choice)
            if (!this.choices.includes(choice)) return 'Invalid Input :' + choice;
            return choice
        } catch (error) {
            console.log(error)
            return 'Invalid Input :'+ input
        }
    },
    playRound:function(computerSelection, playerSelection){
            let pChoice = this.validateInput(playerSelection)
            switch (pChoice) {
                case "Rock":
                    if (computerSelection === "Scissor"){
                        this.score.wins++
                        return this.msg('win');
                    } else if (computerSelection === "Paper"){
                        this.score.lose++
                        return this.msg('lose');
                    }
                    this.score.draw++
                    return 'Draw'
                case "Paper":
                    if (computerSelection === "Rock"){
                        this.score.wins++
                        return this.msg('win');
                    } else if (computerSelection === "Scissor"){
                        this.score.lose++
                        return this.msg('lose');
                    }
                    this.score.draw++
                    return 'Draw'
                case "Scissor":
                    if (computerSelection === "Paper"){
                        this.score.wins++
                        return this.msg('win');
                    } else if (computerSelection === "Rock"){
                        this.score.lose++
                        return this.msg('lose');
                    }
                    this.score.draw++
                    return this.msg('draw');
                default:
                    this.score.invalid++
                    return this.msg('invalid')
            }
    },
    random: function(max=1, min=0){return Math.floor(Math.random()*(max-min)+min)},
    chooseWinner:function(){
        if(this.score.wins > this.score.lose){return this.msg('win')}
        else if(this.score.wins == this.score.lose){return this.msg('draw')}
        return this.msg('lose')
    }
}

const testInput=['rock', 'pApier', 'Scissor', 'Rock', 'Paper', 'ROCK', 'SCIssor', 0, NaN, false, null, undefined, 35454];

const playCommand = document.getElementById('play');
const computerSlot = document.querySelector('#computer-choice > span');
const playerSlot = document.querySelector('#player-choice > span');
const score = document.getElementById('score');

playCommand.addEventListener('click',(e)=>{
    for (let i=0;i<=4;i++){
        const getPlayerSelection = prompt('Make a choice ("Rock", "Paper", "Scissor") :')
        const getcomputerSelection = engine.getcomputerSelection()
        engine.playRound(getcomputerSelection, getPlayerSelection)
        playerSlot.textContent += getPlayerSelection+", "
        computerSlot.textContent += getcomputerSelection+", "
        score.textContent = engine.chooseWinner() + JSON.stringify(engine.score)
    }
});