// 1. Если массив с задачами пустой то под формой нужно выводить сообщение об этом, также это же сообщение нужно выводить если вы удалите все задачи.

// 2. В каждый элемент li добавить кнопку которая будет делать задачу выполненной. завершенные задачи должны быть подсвечены любым цветом.

// 3. Добавить функционал отображения незавершенных задач и всех задач. т.е у вас будет две кнопки над таблицей 1-я "показать все задачи" и 2-я "показать незавершенные задачи", определить завершена задача или нет можно по полю completed в объекте задачи.  По умолчанию при загрузке отображаются все задачи. 

// *Задача со звездочкой. При завершении задачи в разделе "незавершенные задачи" она должна от туда пропадать и быть видна в разделе "все задачи" при этом во всех задачах завершенные задачи могут быть восстановлены. Также в разделе "все задачи" завершенные задачи должны быть в самом низу после открытых задач

const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];
//Самовызывающаяся функция-исполнитель
(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce(( acc, task ) => {
    acc[task._id] = task;
    return acc;
  }, {});

  //Element UI
  const listContainer = document.querySelector(".tasks-list-section .list-group");
  
  const form = document.forms.addTask;
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  //Events
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  listContainer.addEventListener("click", onCompleteHanler);
  const showTaskContainer = document.querySelector(".data-set-show-tasks");
  showTaskContainer.addEventListener("click", onShowOrHideTasks);

  //Отрисовка задач по умолчанию
  function renderAllTasks (tasksList) {
    //Если список задач пуст - выводим сообщение
    messageAboutNoTask(tasksList);
    if(!tasksList) {
      console.error("Please, enter the list of tasks!");
      return;
    }
    //Перед оотображением задачи сортируем по выполненности
    console.log(tasksList);
    const t = sortTaskOnCompleted(tasksList);
    // console.log(tasksList);
    console.log(t);

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach( task => {
      // console.log(task);
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    })
    //Добавляем перед всеми задачами 2 кнопки: "Все" и "Выполненные" задачи
    listContainer.before(buttonGroupTemplate());
    //Затем добавляем все задачи
    listContainer.appendChild(fragment);
  }
  //Отрисовка одной задачи в списке
  function listItemTemplate({_id, title, body, completed} = {}) {
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item", 
        "d-flex", 
        "align-items-center", 
        "flex-wrap", 
        "mt-2"
      );
    li.setAttribute('data-task-id', _id);
    //Выполненые задачи при певоначальной загрузке страницы отображаются светло-зеленым цветом
    if(completed){
      li.style.background = "lightgreen";
    };

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Detete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto","mb-2" , "delete-btn");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete task";
    completeBtn.classList.add("btn", "btn-primary", "ml-auto", "mb-2", "complete-btn");

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(article);

    return li;
  }
  //Функция-обработчик для добавления пользовательских задач
  function onFormSubmitHandler(e) {
    e.preventDefault();

    //При дабавлении хотя бы одной задачи - уведомление удаляем
    const article = document.querySelector(".article-message");
    if(article){
      article.remove();
    }

    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if(!titleValue || !bodyValue) {
      alert("Please, enter title and/or body of new task");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.prepend(listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    }

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }
  //Показ модального окна с подтвеждением на удаление задачи
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Are you sure you want to delete the task: ${title} ?`);
    if(!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }
  //Удаление задачи
  function deleteTaskFromHtml(confirmed, el) {
    if(!confirmed) return;
    el.remove();
  }
  //Функция-обработчик события по поиску и удалении выбранной задачи
  function onDeleteHandler({target}) {
    if(target.classList.contains("delete-btn")){
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirm = deleteTask(id);
      deleteTaskFromHtml(confirm, parent);
      //Проверяем осталась ли хоть одна задача, если нет - выводим сообщение
      messageAboutNoTask(objOfTasks);

    }
  }
  //Создание сообщения при отсутсвии задач
  function messageAboutNoTask(tasks) {
    if(Object.values(tasks).length === 0) {
      const article = document.createElement("p");
      article.textContent = "You don't have tasks!";
      article.classList.add("mt-2", "text-center", "font-weight-bold", "article-message");
      listContainer.append(article);
    }
  }
  //Функция-обработчик события для пометки выполненных задач светло-зеленым цветом
  function onCompleteHanler({target}){
    if(target.classList.contains("complete-btn")) {
      const parent = target.closest("[data-task-id]");
      parent.style.background = "lightgreen";
      const id = parent.dataset.taskId;
      objOfTasks[id].completed = true ;
    }
  }
  //Отрисовка группы кнопок для всех и выполненых задач
  function buttonGroupTemplate () {
    const div = document.createElement("div");
    div.classList.add("btn-group", "data-set-show-tasks");

    const buttonAllTasks = document.createElement("button");
    buttonAllTasks.classList.add("btn", "btn-outline-info", "data-set-all-tasks");
    buttonAllTasks.textContent = "All Tasks";

    const buttonCompletedTasks = document.createElement("button");
    buttonCompletedTasks.classList.add("btn", "btn-outline-info", "data-set-no-completed-tasks");
    buttonCompletedTasks.textContent = "No Completed";

    div.appendChild(buttonAllTasks);
    div.appendChild(buttonCompletedTasks);

    return div;
  }
  //Поиск отображаемых задач и их визуализация либо скрытие, в зависимости от вызываемой функции-обратотчика
  function hideOrShowTask (idTask, show) {
    [...listContainer.children].forEach( li => {
      if(li.dataset.taskId === idTask){
        if(show) {
          //Какого хуя visibility работает, а display - ни хуя!!!!!!!!!!!!!!!!!
          // li.style.display = "none!important";  
          li.style.visibility = "visible";
        } else {
          // li.style.display = "block!important";
          li.style.visibility = "hidden";
        }
      } 
    });
  }
  //Поиск выполненых задач по id
  function findCompledeTask (showTask) {
    Object.values(objOfTasks).forEach(task => {
      if(task.completed === true) 
        hideOrShowTask(task._id, showTask);         
    }); 
  }
  //Функция-обработчик события для визуализации всех или только выполненых задач
  function onShowOrHideTasks ({target}) {
    const btnAll = target.classList.contains("data-set-all-tasks");
    const btnCompleted = target.classList.contains("data-set-no-completed-tasks");
    if(btnAll)
      findCompledeTask(true);
    if(btnCompleted)
      findCompledeTask(false);
  }
  // Функция для сортировки задач (В начале не выполненые, затем выполненные)
  function sortTaskOnCompleted(tasks) {
    const noSorted = Object.values(tasks);
    console.log(noSorted);
    noSorted.sort( (task1, task2) => {
      // console.log(task1, task2);
      if(task1.completed > task2.completed) {   
        console.log("More");
        return -1;  }    
      if(task1.completed < task2.completed) {   
        console.log("Less");
        return 1;   }
      if(task1.completed == task2.completed) {  
        console.log("Equal");
        return 0;   }
    });
    return tasks;
  }

})(tasks);
