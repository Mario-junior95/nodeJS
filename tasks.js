/**
 * 
 */
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.startsWith("hello ")){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }else if(text ==="listOutput\n"){
    listOutput(text); 
  }else if(text.startsWith("add ")){
    add(text)
  }else if(text === "add\n"){
    console.log("Syntax error, you should follow  add by a element to add it inside the list")
  }else if(text.startsWith("remove\n")){
    remove();
  }else if(text.startsWith("remove1\n")){
    remove1();
  }else if(text.startsWith("remove1 ")){
    console.log();
  }else if(text.startsWith("remove2\n")){
    remove2();
  }else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello name!
 *
 * @returns {void}
 */
function hello(value){
  if(value == "hello\n"){
    console.log("hello!");
  }else{
    var tab = ["",value.replace("\n",""),"!"];
    console.log(tab[0]+tab[1]+tab[2]);
  } 
}

/**
 * Creat a list
 * 
 * @returns
 */
var list =[];

function listOutput(){
   console.log(list);
 }

function add(value){
  list.push(value.substr(4).replace("\n",""));
}

function remove(){ 
    list.pop();
}

function  remove1(){
  if(list.length > 0){
    list.shift();
  }else if(list === undefined || list.length === 0){
    console.log("error,you should insert at least one element inside the list before you can remove the first element of a list")
  }
}

function remove2(){
  if(list.length > 0){
    const index = list.indexOf(list[1]);
  if (index > -1) {
    list.splice(index, 1);
  }
  }else if(list === undefined || list.length === 0){
    console.log("error,you should insert at least one element inside the list before you can remove the first element of a list")
  }
}



/**
 * Function help
 * 
 * @returns {void}
 */

 function help(){
   console.log("type hello to say 'hello!'\ntype quit to say 'Quitting now,goodbye!'\nor type exit to say 'Exit now, goodbye!'\nIf you write 'hello' the result will be 'hello!'\nIf you write 'hello anyName' the result will be 'hello anyName!'\n'remove' should delete the last element of the list\n'remove1' should delete the first element of a list\n'remove2' should delete the seconde element of a list\n'listOutput' to Output the result of your list   ")
 }

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function exit(){
  console.log('Exit now, goodbye!')
  process.exit();
}


// The following line starts the application
startApp("Mario-junior")
console.log("-----If any issues appear please write 'help' command------")
