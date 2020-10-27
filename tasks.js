
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
  var tab = text.split(" ");
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n' || tab[0] ==='hello'){
    hello(text);
  }else if(text === 'help\n'){
    help();
  }else if(text === 'list\n'){
    list();
  }else if(tab[0] === 'add'){
    add(text);
  }else if(text === "remove\n" || tab[0] === 'remove'){
    remove(text);
  }else if(tab[0] === "edit" || text !== "edit\n"){
    edit(text);
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
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if(text === "hello\n"){
    console.log('hello!')
  }else{
    console.log(text.trim() + "!");
  }
}

/**
 * 
 * help
 * 
 * @returns
 */
function help(){
  console.log('------------------ list of commands ------------------\n"hello" ---> excute hello! as result\n"hello anyName" ---> excute hello anyName! as result\n"add anyText" ---> Will add the text in the end of my array tasks\n"remove anyNumber"---> will remove any element from the array you chosed using only number\nexit" or "quit" ---> exit the program ');
}


/**
 * 
 * add three functions: add, remove, and list
 * 
 * @returns
 */
var tasks = ["Ski","Coding","PingPong"];

function list(){
  for(var i = 0 ; i < tasks.length ; i++){
    console.log(tasks[i]);
  }
}

function add(text){
  tab = text.split(" ");
  tasks.push(tab[1])
}

function remove(text){
  tab = text.split(" ");
  if(tab[0] === "remove\n"){
    tasks.pop();
  }else{
    if(tab[1] > tasks.length){
      console.log("you enter a number that does not exist")
    }else{
      tasks.splice(parseInt(tab[1]-1),1);
    }
  }
}


function edit(text){
  tab = text.split(" ");
  if(!isNaN(tab[1]) && tab.length === 3 && tab[1] < tasks.length){
    tasks.splice(parseInt(tab[1]-1),1,tab[2].trim());
  }else{
    tasks.splice(parseInt(tasks.length-1),1,tab[1]);
  }
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

// The following line starts the application
startApp("Mario-junior")
