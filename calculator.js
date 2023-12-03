let outputScreen = document.getElementById("output-screen");

        function display(num){
            outputScreen.value += num;
        }
        function calculate(){
            try{
                //alert("Invalidfffffffffff ffdfs"+outputScreen.value);
                console.debug("44444444444");
                outputScreen.value = eval(outputScreen.value);
            }
            catch(err)
            {
                alert("Invalid");
            }    
        }
        function clearText(){
            outputScreen.value = "";
        }
        function del(){
            //alert("Invalidfffffffffff ffdfs");
            outputScreen.value = outputScreen.value.slice(0,-1);
        }