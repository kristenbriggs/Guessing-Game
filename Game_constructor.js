(function() {
    var el = document.getElementById('endGame');
    var Game = function (answer, user, answerCrew) {
        this.userIdent = user;
        this.answer = answer;
        this.answerCrew = answerCrew;
        this.guess;
        this.secondquestion = function (guess) {
            if (this.answerCrew === guess) {
                return true;
            }
            return false;
        }
        this.endGame = function () {
          el.textContent = 'Good job, ' + this.userIdent + '! Now is the time for you to become a rower!';
        }
    };

    var user = prompt('Hello! What\'s your name?');

    var ask1 = new Game(2000, user, 9);
    var ask2 = new Game(9, user, 5000);

    ask1.guess = prompt('Welcome. Every spring, hundreds of teams compete in the San Diego Crew Classic, a rowing regatta. How many thousands of meters are rowed in each race?');

    ask1.guess = Number.parseInt(ask1.guess);
            console.log(ask1.guess + ' ' + ask1.answer);
        while (ask1.guess !== ask1.answer) {
            if (ask1.guess < 1000) {
                ask1.guess = Number.parseInt(prompt('Remember, it\'s in the thousands!'));
            } else if(ask1.guess < ask1.answer)  {
                ask1.guess = Number.parseInt(prompt('Not quite; rowing a short race will lead to an angry coach! Try again.'));
            } else if(ask1.guess > ask1.answer)  {
                ask1.guess = Number.parseInt(prompt('Not quite; rowing too far will exhaust your boat! Try again.'));
            }

        }

    function nextQuestion() {
        var guessCrew = prompt('Congratulations! You\'re on your way to becoming a rower. Bonus question! In San Diego, how many people are in a boat?');
        guessCrew = Number.parseInt(guessCrew);
          var test = ask1.secondquestion(guessCrew);
        while (ask1.answerCrew !== guessCrew) {

            if (guessCrew < ask1.answerCrew) {
                guessCrew = Number.parseInt(prompt('Your teamates will be upset if not everyone shows. Try again.'));
            } else if(guessCrew > ask1.answerCrew)  {
                guessCrew = Number.parseInt(prompt('Are you trying to sink the boat??!? Try again.'));
            }

        }
    }




        nextQuestion();
        ask1.endGame();

  })();
