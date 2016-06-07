
 // Create a Todo application!
 //  - Use jQuery and the things we've learned so far. You may also need to dive into some things we haven't covered; practice your google-fu!
 //  - Your Todo application should have the following features
 //      - Add a Todo to the list
 //      - Delete a Todo from the list
 //      - Mark a Todo as "completed"
 //      - Let the user filter the list so that...
 //          a. all todos are visible
 //          b. only the completed todos are visible
 //          c. only the unfinished todos are visible 

// we are going to use jquery to create new tree elements that represent text
// asign those elements class or ids so they can be filtered
// have a button that can create new elements
// add attr such as completed id or class when element is done

// create element with jquery
// $('body').append('<div> hello world </div>');
// add a button that will add this automatically
 $('body').submit(function(e){
      e.preventDefault();

 });



var task_Counter = 0;
$('#target').click(function() {
	//create remove button with same id as the thing you are appending
	var notCompletedDIV = "<div class='notCompleted'  style='border-style:solid'>done</div>";
	var completedDIV = "<div class='completed'  style='border-style:solid'>done</div>";
	var removeDIV = "<div class='remove'  style='border-style:solid'>" + " remove " + "</div>"
	var taskDIV = "<div class='taskDetail'>" + $('#new_task').val()+ "</div>" + "<br>" 
	var doneTaskDIV = "<div class='task' id=task" + task_Counter +">" + completedDIV + removeDIV + "<span class='taskDetail'> <s>" + $('#new_task').val()+ "</s> </span>" + "<br>" + "<br>" +"</div>"
	var removeTask = 	function(){$('.remove').click(function(){		$(this).parent().remove();		})}	


	$('body').append( "<div class='task' id='task'" + task_Counter +">" + notCompletedDIV + removeDIV + taskDIV +"</div>");

	task_Counter++;
	removeTask();

	//underline task after clicking on done
	$('.notCompleted').click(function(){
		$(this).parent().html(doneTaskDIV)

		removeTask();

	})

	//filter completed tasks after hitting completed filter button
	$('#completedFilter').click(function(){

		$('.notCompleted').parent().fadeOut();


	})

	//filter by unfinished tasks
	$('#notCompletedFilter').click(function(){

		$('.completed').parent().fadeOut()

	})



	
})


// same thing as abouve but pressing enter key
$(document).keypress(function(e) {
	if (e.which ==13){
	//create remove button with same id as the thing you are appending
	var notCompletedDIV = "<div class='notCompleted'  style='border-style:solid'>done</div>";
	var completedDIV = "<div class='completed'  style='border-style:solid'>done</div>";
	var removeDIV = "<div class='remove'  style='border-style:solid'>" + " remove " + "</div>"
	var taskDIV = "<div class='taskDetail'>" + $('#new_task').val()+ "</div>" + "<br>" 
	var doneTaskDIV = "<div class='task' id=task" + task_Counter +">" + completedDIV + removeDIV + "<span class='taskDetail'> <s>" + $('#new_task').val()+ "</s> </span>" + "<br>" + "<br>" +"</div>"
	var removeTask = 	function(){$('.remove').click(function(){		$(this).parent().remove();		})}	


	$('body').append( "<div class='task' id='task'" + task_Counter +">" + notCompletedDIV + removeDIV + taskDIV +"</div>");

	task_Counter++;
	removeTask();

	//underline task after clicking on done
	$('.notCompleted').click(function(){
		$(this).parent().html(doneTaskDIV)

		removeTask();

	})

	//filter completed tasks after hitting completed filter button
	$('#completedFilter').click(function(){

		$('.notCompleted').parent().fadeOut();


	})

	//filter by unfinished tasks
	$('#notCompletedFilter').click(function(){

		$('.completed').parent().fadeOut()

	})



	
	}	
})
