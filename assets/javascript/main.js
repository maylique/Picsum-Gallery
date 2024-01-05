const section = document.querySelector('section');
let i = 1;
let itemDiv = document.createElement('div');
let loadBtn = document.createElement('button');

function processData(data, i) {
    data.forEach(obj => {
        const imgUrl = obj.download_url;
        const caption = obj.author;
        const seeMore = obj.url;

        let createFigure = document.createElement('figure');
        let createImg = document.createElement('img');
        let createFigCaption = document.createElement('figcaption');
        let btn = document.createElement('button');

        section.appendChild(createFigure);
        createImg.setAttribute('src', imgUrl);
        createFigure.appendChild(createImg);
        createFigure.appendChild(createFigCaption);
        createFigure.appendChild(btn);
        createFigCaption.textContent = caption;
        btn.textContent = 'See More';
        btn.addEventListener('click', () => window.open(seeMore));
    });
    document.querySelector("body").appendChild(itemDiv);
    document.querySelector("body").appendChild(loadBtn);
    window.onscroll = function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            fetch(`https://picsum.photos/v2/list?page=${i}`)
                .then((resp) => resp.json())
                .then((data) => processData(data, i))
                .catch((error) => console.log('Monte dein Aquarium brennt', error));
        }
    }
}



fetch(`https://picsum.photos/v2/list?page=${i}`)
    .then((resp) => resp.json())
    .then((data) => processData(data, i))
    .catch((error) => console.log('Monte dein Aquarium brennt', error));