
//place to save tasks
//declaring an array
var taskArray = [];


//update task list
var updateTasks = function(){
	
	//defines the last task list div
	var taskListHolding = document.getElementById('taskList');

	//empty the task list
	taskListHolding.innerHTML='';

	//determine task list length
	var len = taskArray.length;
	var i;

	for(i=0; i<len; i++){
		console.log('task ' + i + taskArray[i]);
		//create element
		var newTask = document.createElement('div');

		//define the div's ID and it's class
		newTask.id=i;
		newTask.className='task';

		//create the task paragraph
		var task = document.createElement('p');

		//assigning the task to the task div
		task.innerHTML = taskArray[i];

		//create the delete button
		var deleteButton = document.createElement('button');
		//set the delete button ID to deleteButton
		deleteButton.id= 'deleteButton';
		//add a value to our button
		deleteButton.innerText='X';

		//listen for the click
		deleteButton.addEventListener('click', function(e){
			e.preventDefault();
			// deleteTask(e);
			strikeText(e);
			// document.getElementById("swipemp3").play();
		});//end of event listener

		//append the task to the taskdiv
		newTask.appendChild(task);

		//append the delete button to the newTask div
		newTask.appendChild(deleteButton);

		//append the taskDiv to the tasklistholding Div
		taskListHolding.appendChild(newTask);

	}; //end of for loop

};

//save task
var saveTask = function(){
//defines input form and assigns the value
	var taskInput = document.getElementById('newTask');
	var newTask = taskInput.value;

//add new value to your array by pushing
taskArray.push(newTask);
console.log(taskArray);

updateTasks();
	taskInput.value="";
};


// //delete task
// var deleteTask = function(e){
// 	//splice is the deleting from the array. It has 2 parametres
// 	var taskNumber= e.target.parentElement.id;
// 	taskArray.splice(taskNumber, 1);
// 	updateTasks();
// };

//strikethrough text
var strikeText = function(e){

	var taskX=document.getElementById('taskList');
	taskX.style.textDecoration = 'line-through';
	// taskX.innerHTML = '<strike>' + taskX.innerHTML + '</strike>';

	updateTasks();

};

//init
var init = function(){

	//call the add button
	var addButton = document.getElementById('addButton');

	//add event listening for click
	addButton.addEventListener('click',function(e){
	e.preventDefault();
	saveTask();
	}
)};

window.onload = init();