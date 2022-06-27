/*
    Name: Mohammed Qaasim Desai  
    Student Number: 0776412
*/

// Class code goes here

class MohammedDesaiSecret{
 
    constructor(s){
        this._secret = s;
        //this._secret = "guessit0776412.json";
        this.guessNumber = 0;
        this.hints = [  
        "Contains 14 letters excluding .json",
        "Has 4 words",
        "You will be wrong",
        `The first 2 words are: "youwont"`,
        `Middle word is: "be"`];
        };
                          
        gethint(){
            if(this.guessNumber < 5)
            {
                let newNum = this.hints[this.guessNumber];
                console.log(newNum);
                //this.guessNumber ++;
                return newNum;
            }
            else{
                console.log(" ");
            }        
        }

        set _secret(value){
            //this._secret = value;
            
        }

        testSecret(s){

            this.guessNumber ++;
            if(this.guessNumber > 5){
                //console.log("Sorry you have lost the game!");

                var p = document.createElement("p");
                var content = document.createTextNode("Sorry you have lost the game!");
                p.appendChild(content);
                document.getElementById("result").appendChild(p);
            }
            else{
                try{
                    
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET","guessit0776412.json");

                    xhr.onload = function(){
                        if (xhr.status === 200){
                            console.log("hiiiiiiii");
                            let responseDataObject = xhr.responseText;
                            console.log(responseDataObject);
                        }
                        xhr.send();
                    }
                }
                catch(e){
                    e;
                }
                finally{
                }
            }
        }
};

var fname = document.getElementById("filename").value;
let MDS = new MohammedDesaiSecret(fname);



// jquery code goes here
$(function(){

    $("button").on("click", function() {
        MDS.gethint();
        MDS.testSecret();
    })
});