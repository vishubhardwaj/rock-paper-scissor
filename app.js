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
                    return 'Draw'
                case "Paper":
                    if (computerSelection === "Rock"){
                        this.score.wins++
                        return this.msg('win');
                    } else if (computerSelection === "Scissor"){
                        this.score.lose++
                        return this.msg('lose');
                    }
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
    random: function(max=1, min=0){return Math.floor(Math.random()*(max-min)+min)}
}

const testInput=['rock', 'pApier', 'Scissor', 'Rock', 'Paper', 'ROCK', 'SCIssor', 0, NaN, false, null, undefined, 35454];

//game
// const getplayerSelection = input[Math.floor(Math.random()*input.length)]
// const getcomputerSelection = engine.getcomputerSelection();
// const winner = engine.playRound(getcomputerSelection, getplayerSelection) 

// console.log({"computer":getcomputerSelection},{"player":getplayerSelection})
// console.log(winner)
// console.log(engine.score)


// 5 round game
for (let i=0;i<=20;i++){
    const getplayerSelection = testInput[Math.floor(Math.random()*testInput.length)]
    const getcomputerSelection = engine.getcomputerSelection();
    engine.playRound(getcomputerSelection, getplayerSelection) 
}

