// Переделали функцию getPost из ветки "fetch" с помощью async/await
async function getPost(id) {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
}

getPost(1)
  .then(data => console.log(data))
  .catch(error => console.log(error));