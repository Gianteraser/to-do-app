
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

var task_Counter = 0;
$('#target').click(function() {
	//create remove button with same id as the thing you are appending
	var notCompletedDIV = "<div class='notCompleted' style='float:left'>done</div>";
	var removeDIV = "<div class='remove' style='float:left'>" + "remove" + "</div>"
	var removeTask = 	function(){$('.remove').click(function(){		$(this).parent().remove();		})}	


	$('body').append( "<div class='task' id=task" + task_Counter +">" + notCompletedDIV + removeDIV +  $('#new_task').val() + "<br>" +"</div>");

	task_Counter++;
	removeTask();

	$('.notCompleted').click(function(){
		$(this).parent().html("<div class='task' id=task" + task_Counter +">" + notCompletedDIV + removeDIV + '<s>' + $('#new_task').val() + '</s>' + "<br>" +"</div>")

		removeTask();



	})
	
})



//use .click to add the text in the text box