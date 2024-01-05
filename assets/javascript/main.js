fetch('https://picsum.photos/v2/list')
.then((resp) =>  resp.json())
.then((data) => console.log(data))
.catch((error) => console.log('Monte dein Aquarium brennt', error))