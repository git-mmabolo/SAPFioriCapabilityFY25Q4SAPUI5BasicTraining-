sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.View3", {
        onInit() {


        },

        onPressConvert() {

            var oInput = this.byId("valTxt");
            var numInpVal = oInput.getValue();
            

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
    });
});