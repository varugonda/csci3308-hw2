function calC(c) {  
    // TODO: 3.1
    // This function does the evaluation for the calculator
    /*
    How this function would look if it were in Javascript would be:
    document.getElementById('panel').value += c;
    You need to convert the line above to JQuery.
    If you are writing more than a couple of lines of code, something is off. Check the reference links again
    */       
    $("#panel").val($("#panel").val()+c);
    
}
function CE() {
    // TODO: 3.2
    // This function performs the clear function
    /*
    How this function would look if it were in Javascript would be:
    document.getElementById('panel').value = "";
    You need to convert the line above to JQuery.
    If you are writing more than a couple of lines of code, something is off. Check the reference links again
    */      
    $("#panel").val("");

}