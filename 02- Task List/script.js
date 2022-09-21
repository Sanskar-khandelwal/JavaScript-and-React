const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      clearBtn = document.querySelector('.clear-tasks'),
      filter = document.querySelector('#filter')
      taskInput = document.querySelector('#task');



      // To check wheather everything exist
    //   console.log(form);
    //   console.log(taskList);
    //   console.log(clearBtn);
    //   console.log(filter);
    //   console.log(taskInput);

    
// load all event Listener function call

loadEventListener();

// load all the event Listener function declaration 

function loadEventListener(){  
    //Add the task event 
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear all task 
    clearBtn.addEventListener('click', removeAll);

    //Filter tasks events
    filter.addEventListener('keyup', filterTasks);
   



}

// Adding task to the list 
function addTask(e){

    if(taskInput.value == ''){
        alert('Add a task');
        return;
    }

    //Create li element 

    const li = document.createElement('li');
;


    li.className +=  'collection-item';
     

    // create text node and append
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element 
    const link = document.createElement('a');

    //Add class 
    link.className += 'delete-item secondary-content'

    // Ad icon HTML 

    link.innerHTML = `<i class="fa fa-remove"></i>`;
   
  
    console.log(link.innerHTML);


  // appending link in li
    li.appendChild(link);

    //Append li to ul 
  
    taskList.appendChild(li);



  // making input blank again 
  taskInput.value = '';
    

    e.preventDefault();
}




// Remove task
function removeTask(e){

   if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ? 👀'))
    e.target.parentElement.parentElement.remove();
   }

}


// Remove all tasks
function removeAll(e){
     
    if(confirm('Remove all the task ? 👀')){  
        let first = taskList.firstElementChild;
        while (first) {
            first.remove();
            first = taskList.firstElementChild;
        }
   }

    e.preventDefault();
}


// Filter Task


function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    })
}