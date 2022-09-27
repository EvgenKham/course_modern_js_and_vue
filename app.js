//Сначала загружаем пост, потом загружаем коментарии поста и последнее - находим id автора поста

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     return response.json();
//   })
//   .then(posts => {
//     console.log(posts);
//   })
//   .catch(error => console.log(error));


function getPost(id) {
  return new Promise( (resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => resolve(post))
      .catch(error => reject(error));
  });
}

getPost(3).then(post => console.log(post));
