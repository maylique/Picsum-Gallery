const section = document.querySelector('section')

fetch('https://picsum.photos/v2/list')
.then((resp) =>  resp.json())
// .then((data) => console.log(data))
.then((data => {
    console.log(data);
    data.forEach(obj => {
        const imgUrl = obj.download_url
        const caption = obj.author
        const seeMore = obj.url

        let createFigure = document.createElement('figure')
        let createImg = document.createElement('img')
        let createFigCaption = document.createElement('figcaption')
        let btn = document.createElement('button')

        section.appendChild(createFigure)
        createImg.setAttribute('src', imgUrl)
        createFigure.appendChild(createImg)
        createFigure.appendChild(createFigCaption)
        createFigure.appendChild(btn)
        createFigCaption.textContent = caption
        btn.textContent = 'See More'
        btn.addEventListener('click', () => window.open(seeMore))
        
    });
}))
.catch((error) => console.log('Monte dein Aquarium brennt', error))

