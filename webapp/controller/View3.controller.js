sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.View3", {
        
        onInit: function() {  
            this.generateTriangle();
            this.generateX(5);
            this.generateColors();
        },

        generateTriangle: function() { //exercise3 item2
            let rowHeight = 5;
            let numLoop = rowHeight;
            let oOutput = "";
            let num1 = 1;
            let charStars = "*";

            while(numLoop >= num1){
                oOutput += charStars.repeat(numLoop) + "\n";
                numLoop--;
            }
            var valPerimeter = oOutput.length; //exercise3 item4
            this.byId("eXer3txt1").setValue(oOutput + "The Perimeter of the Triangle is: " +valPerimeter);
        },

        //did not shows X mark in html still looking for fix for whitespaces "but in debug it is showing X mark"
        generateX: function(limit) { //exercise3 item3
            var oOutputText = "";
            for(var numLoop = 0; numLoop < limit; numLoop++){
                var rowHeight = "";
                for(var numLoop1 = 0; numLoop1 < limit; numLoop1++){
                    if(numLoop1 === numLoop || numLoop1 === limit - 1 - numLoop1){
                        rowHeight += "*";
                    }else{
                        rowHeight += " ";
                    }
                }oOutputText += rowHeight + "\n";
            }this.byId("eXer3txt2").setValue(oOutputText) ;     
        },

        generateColors: function() { //exercise3 item5
            var countColors = ["Blue ", "Green ", "Red ", "Orange ", "Violet ", "Indigo ", "Yellow "];
            var countPosition = ["st", "nd", "rd", "th"];
            var countColorsVal = countColors.length;
            var numColors = 0;
            var oOutput = "";

                for(var numColors = 0; numColors < countColorsVal; numColors++){
                    let oColors = countColors[numColors];
                    let oOutputRes = numColors+1 ;
                    if(numColors === 0){
                        var oCountPosition = countPosition[0];                  
                    }else if(numColors === 1){
                        var oCountPosition = countPosition[1];                      
                    }else if(numColors === 2){
                        var oCountPosition = countPosition[2];                      
                    }else if(numColors <= countColorsVal){
                        var oCountPosition = countPosition[3];  
                    }
                    oOutput += oOutputRes + oCountPosition + " choice is " + oColors + "\n" ; 
                }this.byId("eXer3txt3").setValue(oOutput);
                
        },
            
        onPressConvert() { //exercise3 item1

            var oInput = this.byId("valTxt");
            var numInpVal = oInput.getValue();

            if(isNaN(numInpVal)){
                oInput.setValue("Not a number")
            }else{
                var countOnes = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
                    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
                ];

                var countTens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety",
                ];

                var onesWord = countOnes[numInpVal];
                var tensWord = countTens[numInpVal];

                if(numInpVal < 20){
                    var onesWord = countOnes[numInpVal];
                    oInput.setValue(onesWord);
                }else if(numInpVal < 100){
                    var retTens = countTens[Math.floor(numInpVal / 10)] + (numInpVal % 10 ? "-" + countOnes[numInpVal % 10] : "");
                    oInput.setValue(retTens);
                }else if(numInpVal < 1000){
                    var retTens = countOnes[Math.floor(numInpVal / 100)] + " hundred " + (countTens[Math.floor(numInpVal[1] % 10)] + "-" + countOnes[numInpVal % 10]);
                    oInput.setValue(retTens);
                }
            }
        },

    });
});