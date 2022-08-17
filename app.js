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
  listContainer.addEventListener("click", onCompleteHandler);
  listContainer.addEventListener("click", onRecoverHandler);
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
    //Перед отображением задачи сортируем по выполненности
    tasksList = sortTaskOnCompleted(Object.values(tasksList));
    const fragment = createListFragment(tasksList);

    //Добавляем класс для того, чтобы разлизать в каком разделе находятся задачи(All or Completed). 
    //При первичном рендеринге по умолчанию отрисовываются все задачи
    listContainer.classList.add("all-tasks");
    //Добавляем перед всеми задачами 2 кнопки: "Все" и "Выполненные" задачи
    listContainer.before(buttonGroupTemplate());
    //Затем добавляем все задачи
    listContainer.appendChild(fragment);
  }
  //Создание фрагмента со списком задач
  function createListFragment(tasks) {
    const fragment = document.createDocumentFragment();
    tasks.forEach( task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    })
    return fragment;
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

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    //Контейнер для кнопок "Complete", "Delete", "Recover"
    const divGroupBtn = document.createElement("div");
    divGroupBtn.classList.add("btn-group", "ml-auto","mb-2");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "mb-2", "delete-btn");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete task";
    completeBtn.classList.add("btn", "btn-primary", "mb-2", "complete-btn");

    const recoverBtn = document.createElement("button");
    recoverBtn.textContent = "Recover task";
    recoverBtn.classList.add("btn", "btn-success", "mb-2", "recover-btn");
    
    //Выполненые задачи по умолчанию отображаются светло-зеленым цветом и их возможно восстановить
    if(completed){
      li.style.background = "lightgreen";
    } else {
      recoverBtn.style.visibility = "hidden";
    }

    divGroupBtn.appendChild(completeBtn);
    divGroupBtn.appendChild(deleteBtn);
    divGroupBtn.appendChild(recoverBtn);

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(divGroupBtn);
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
  //Помечаем выполненные задачи светло-зеленым цветом и сортируем их по выполненности
  function onCompleteHandler({target}){
    if(target.classList.contains("complete-btn")) {
      const parent = target.closest("[data-task-id]");
      parent.style.background = "lightgreen";
      //Задача исчезает, если находимся в разделе "No copmleted tasks"
      if(!checkSection()) {
        parent.style.visibility = "hidden";
      } 
      const id = parent.dataset.taskId;
      //Cвойство задачи "completed", на котором произошло событие, изменяем на true
      objOfTasks[id].completed = true;
      sortAndVisible(objOfTasks);
    }
  }
  //Востанавливаем задачу в разделе "All Tasks"
  function onRecoverHandler({target}) {
    if(target.classList.contains("recover-btn")){
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      parent.style.background = "white";
      objOfTasks[id].completed = false;
      sortAndVisible(objOfTasks);
    }
  }
  //Отрисовка группы кнопок для всех и выполненых задач
  function buttonGroupTemplate () {
    const divButtons = document.createElement("div");
    divButtons.classList.add("btn-group", "data-set-show-tasks");

    const buttonAllTasks = document.createElement("button");
    buttonAllTasks.classList.add("btn", "btn-outline-info", "data-set-all-tasks");
    buttonAllTasks.textContent = "All Tasks";

    const buttonCompletedTasks = document.createElement("button");
    buttonCompletedTasks.classList.add("btn", "btn-outline-info", "data-set-no-completed-tasks");
    buttonCompletedTasks.textContent = "No Completed Tasks";

    divButtons.appendChild(buttonAllTasks);
    divButtons.appendChild(buttonCompletedTasks);

    return divButtons;
  }
  //Поиск отображаемых задач и их визуализация либо скрытие, в зависимости от вызываемой функции-обратотчика
  function hideOrShowTask (idTask, show) {
    [...listContainer.children].forEach( li => {
      if(li.dataset.taskId === idTask){
        if(show) { 
          li.style.visibility = "visible";
        } else {
          li.style.visibility = "hidden";
        }
      } 
    });
  }
  //Поиск выполненых задач по id
  function findCompledeTasks (isCompleted) {

    Object.values(objOfTasks).forEach(task => {
      if(task.completed === true) 
        hideOrShowTask(task._id, isCompleted);         
    }); 
  }
  //Функция-обработчик события для визуализации всех или только выполненых задач
  function onShowOrHideTasks ({target}) {
    const btnAll = target.classList.contains("data-set-all-tasks");
    const btnNoCompleted = target.classList.contains("data-set-no-completed-tasks");
    if(btnAll) {
      if(!checkSection()){
        listContainer.classList.add("all-tasks");
      }
      findCompledeTasks(true);
    }
    if(btnNoCompleted){
      if(checkSection()){
        listContainer.classList.remove("all-tasks");
      }
      findCompledeTasks(false);
    }
  }
  // Функция для сортировки задач (В начале не выполненые, затем выполненные)
  function sortTaskOnCompleted(tasks) {
    tasks.sort( (task1, task2) => {
      if(task1.completed > task2.completed) {   return 1;  }    
      if(task1.completed < task2.completed) {   return -1;   }
      if(task1.completed == task2.completed) {  return 0;   }
    });
    return tasks;
  }
  //Проверка в каком разделе находимся: если в "All Tasks" возвращает true, иначе - false
  function checkSection () {
    if(listContainer.classList.contains("all-tasks")) { 
      return true; 
    } else {  
      return false; 
    }
  }
  //Перерисовываем задачи по выполненности и разделяем на два раздела
  function sortAndVisible(tasksList){
    const tasks = sortTaskOnCompleted(Object.values(tasksList));
    //Удаляем все дочерние элементы в контейнере
    while (listContainer.firstChild) {
      listContainer.removeChild(listContainer.firstChild);
    }
    //Наполняем контейнер отсортироваными задачами
    const fragment = createListFragment(tasks);
    listContainer.appendChild(fragment);
    //Проверяем в каком разделе находимся("All Tasks"\"No Completed Tasks").
    //Если в "No Completed Tasks", то после выполнения одной из них она исчезает и появляется в "All Tasks"
    if(checkSection()) {
        return;
    } else {
      Object.values(tasks).forEach(task => {
        if(task.completed === true) {
          [...listContainer.children].forEach( li => {
            if(li.dataset.taskId === task._id){
              li.style.visibility = "hidden";
            }
          });
        }
      })
    }
  }

})(tasks);