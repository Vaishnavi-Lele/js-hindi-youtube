// Immediately Invoke Function Expression (IIFE)
(function chai(){ //named iffe
    console.log(`DB CONNECTED`);
    
}) ();//semicolon is imp to end the iife 

//iife used to remove global scopes pollution 

(  (name) => { //un-named iffe
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('vaishnavi')