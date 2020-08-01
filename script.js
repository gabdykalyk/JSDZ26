//TASK 1

let body = document.querySelector('body')
function textUpdate() {
    let xhr = new XMLHttpRequest()
    let URL = 'https://jsonplaceholder.typicode.com/posts';
    xhr.open('GET', URL)
    xhr.send()

    xhr.addEventListener('load', () => {
        let data = JSON.parse(xhr.response)
        data.forEach(element => {
            let div = document.createElement('div')
            div.innerHTML = `Id Пользователя:${element.userId}
                        <br>
                        id: ${element.id}
                        <br>
                        Заголовок: ${element.title}
                        <br>
                        Текст: ${element.body}
                        <br>
                        <br>`
            body.prepend(div)
        });
    
    })
}
textUpdate()

// TASK 2
function image() {
    let xhr = new XMLHttpRequest()
    let URL = 'http://jsonplaceholder.typicode.com/photos?_start=0&_end=30';
    xhr.open('GET', URL)
    xhr.send()

    xhr.addEventListener('load', () => {
        let data = JSON.parse(xhr.response)
        let carousel = document.querySelector('#carousel')
        let active = document.querySelector('#active')
        let activeImage = document.querySelector('#activeImage')
        let h5 = document.querySelector('#h5')
        activeImage.src = data[0].url
        h5.innerHTML = data[0].title
        function renderDiv() {
            for (let i = 1; i < data.length; i++) {
                let div = document.createElement('div')
                div.innerHTML = `<img src="${data[i].url}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${data[i].title}</h5>
                    </div>`
                div.classList.add('carousel-item')
                carousel.append(div)
            }

            // data.forEach(element => {
            //     let div = document.createElement('div')
            //     div.innerHTML = `<img src="${element.url}" class="d-block w-100" alt="...">
            //         <div class="carousel-caption d-none d-md-block">
            //             <h5>${element.title}</h5>
            //         </div>`
            //     div.classList.add('carousel-item')
            //     carousel.append(div)
            // });      
        }

        renderDiv()
    })
}

image()

