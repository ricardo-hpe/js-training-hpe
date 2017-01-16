//Ricardo Arostegui
// Small game for practicing
//javascript:(function () { var el = document.createElement("script"); el.src = "http://:C/Users/gaizkaar/Documents/JS/js-training-hpe/game1.js"; document.body.appendChild(el); })();
// var ele = document.createElement("script");
// var scriptPath = "http://localhost:127.0.0.1:8124/game1.js" //verify the script path
// ele.setAttribute("src",scriptPath);
// document.head.appendChild(ele)

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8060, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8060/');

var prompt = require('prompt');
prompt.start();

prompt.get("Do you choose rock, paper or scissors?", function userChoice);
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (userChoice, computerChoice){
if (userChoice === computerChoice){
    return "The result is a tie!";
    } else if (userChoice === "rock"){
        if (computerChoice === "scissors"){
        return "rock wins";
        } else{
            return "paper wins";
        }
    }else if (userChoice === "paper"){
        if (computerChoice === "rock"){
        return "paper wins";
        } else{
            return "scissors  wins";
        }
    }else if (userChoice === "scissors"){
        if (computerChoice === "rock"){
        return "rock wins";
        } else{
            return "scissors  wins";
        }
    }
};

compare(userChoice, computerChoice);
