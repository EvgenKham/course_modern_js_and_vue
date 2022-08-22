// Дан массив пользователей, создать таблицу. Условия:
// --- В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы,
//     при этом он должен быть всегда выровнен по правому краю. 
// --- Количество пользователей может быть любым.
// --- Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер.
// --- В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th,
//     которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... },
//     соответственно ключ объекта - это ваше поле, которое вы хотите вывести из объекта пользователя,
//     а значение это заголовок th.
// --- Создать кнопку которая будет при клике сортировать пользователей по возрастанию и убыванию поля balance,
//     при этом, в кнопке должна показываться стрелка в какую сторону сейчас отсортированы пользователи. 
//     Иконки можете взять с font awesome, в качестве фреймворка использовался bootstrap.


const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

(function (arrOfUsers) {

  const tableHeadName = {
    id: "#",
    name: "Name",
    email: "Email",
    balance: "Balance"
  };

  let totalBalance = 0;

  const tableContainer = document.querySelector(".table-container");
  const tableSection = document.querySelector(".table-section");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.classList.add("head");
  const tbody = document.createElement("tbody");
  tbody.classList.add("body");
  const tfoot = document.createElement("tfoot");
  tbody.classList.add("foot");
  

  renderTable();
  tableSection.addEventListener("click", onSort);

  function renderTable() {
    
    table.classList.add("table", "table-hover", "col", "col-8",);
    table.setAttribute("align", "center");
    table.setAttribute("frame", "hsides");

    thead.append(createHeader());
    table.append(thead);
    tbody.append(createBody());
    table.append(tbody);
    tfoot.append(createFooter(totalBalance));
    table.append(tfoot);

    tableContainer.before(createButtonSort());
    tableContainer.append(table);
  }

  function createHeader() {
    const tRowHead = document.createElement("tr");
    Object.values(tableHeadName).forEach( element => {
      const cellHead = document.createElement("th");
      cellHead.textContent = element;
      tRowHead.append(cellHead);
    });
    return tRowHead;
  }

  function createFooter(balance = 0) {
    const tRowFoot = document.createElement("tr");
    const cellFoot = document.createElement("td");
    cellFoot.setAttribute("colspan", "4");
    cellFoot.setAttribute("align", "right");
    cellFoot.textContent = `Total balance: ${balance}`;
    tRowFoot.append(cellFoot);
    return tRowFoot;
  }

  function createBody(users = arrOfUsers) {
    const fragment = document.createDocumentFragment();

    let idUser = 1;
    Object.values(users).forEach( user => {
      totalBalance += user.balance;
      const rowBody = createRowBody(idUser, user);
      fragment.appendChild(rowBody);
      idUser++;
    })
    return fragment;
  }

  function createRowBody(id, {name, email, balance} = {}){
    const tRowBody = document.createElement("tr");

    const cellId = document.createElement("td");
    cellId.textContent = id;
    
    const cellName = document.createElement("td");
    cellName.textContent = name;
  
    const cellEmail = document.createElement("td");
    cellEmail.textContent = email;

    const cellBalance = document.createElement("td");
    cellBalance.textContent = balance;

    tRowBody.append(cellId);
    tRowBody.append(cellName);
    tRowBody.append(cellEmail);
    tRowBody.append(cellBalance);
    
    return tRowBody;
  }

  function createButtonSort(){
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("col", "col-8", "mx-auto", "mb-2");
    const button = document.createElement("button");
    button.textContent = "Sort";
    button.classList.add("btn", "btn-primary", "mt-3", "sort-btn");
    buttonContainer.append(button);
    return buttonContainer;
  }

  function onSort({target}) {
    if(target.classList.contains("sort-btn")) {
      const btn = document.querySelector(".sort-btn");
      const sort = btn.classList.toggle("sort-reduce");
      let users = {};

      createButtonArrow(btn, sort);
    
      if(sort){
        users = sortReduceBalance(Object.values(arrOfUsers));
      } else {
        users = sortIncreaseBalance(Object.values(arrOfUsers));
      }
      renderSortedTable(users);
    }
  }

  function renderSortedTable(users) {
    const oldBody = table.querySelector(".body");
    oldBody.remove();
    const newBody = document.createElement("tbody");
    newBody.classList.add("body");
    newBody.append(createBody(users));
    thead.after(newBody);
  }
  //Добавление стрелки, которая показывает в какую сторону отсортирован список пользователей
  function createButtonArrow(button, sort){
    const arrow = document.createElement("i");
    arrow.setAttribute("style", "color:white");

    if(button.querySelector(".fa")){
      button.querySelector(".fa").remove();
    }

    if(sort){
      arrow.classList.add("fa", "fa-arrow-up");
      button.append(arrow);
    } else {
      arrow.classList.add("fa", "fa-arrow-down");
      button.append(arrow);
    }
  }
  //Сортировка по уменьшению
  function sortReduceBalance(users) {
    users.sort( (user1, user2) => {
      if(user1.balance > user2.balance ) {   return -1; }    
      if(user1.balance < user2.balance ) {   return 1;  }
      if(user1.balance == user2.balance) {   return 0;  }
    });
    return users;
  }
  //Сортировка по возростанию
  function sortIncreaseBalance(users) {
    users.sort( (user1, user2) => {
      if(user1.balance > user2.balance ) {   return 1;  }    
      if(user1.balance < user2.balance ) {   return -1; }
      if(user1.balance == user2.balance) {   return 0;  }
    });
    return users;
  }
  
}(users))