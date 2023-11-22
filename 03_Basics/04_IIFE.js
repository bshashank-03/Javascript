// Immediately Invoked Function Expressions (IIFE)

/* *** Sometimes function get polluted due to global scope 
so to get rid we use IIFE
Immediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope. In this video, you'll uncover the power of IIFEs and how they can enhance code organization, protect variables, and prevent naming collisions

***  */
(function chai(){
    // Named IIFE
    console.log(`DB is connected`); // ()()
    // () first is for writing function definition
    // () second is for execution call
})();

((name)=>{
    // Unnamed IIFE
    console.log(`DB connected again ${name}`);
})('Shashank')

// Sometimes situation occurs when IIFE invoke function but
// does not know where to stop the context so we use ()(); 