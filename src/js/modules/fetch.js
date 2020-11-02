// const slides = document.querySelectorAll('.hero__image')

// fetch("https://api.unsplash.com/photos/?client_id=G_CjeO14tZA1Keu2rJI-Q9vgHfvuOhUrB9JEgPBawDU")
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)

//     data.forEach(item => {
//         const image = `<img src="${item.urls.regular}" />`

//         // console.log(item.urls.regular)

//         slides.forEach(slide => {
//             console.log(slide)
//             // const fig = slide.querySelector('.')
//             // slide.appendChild(image)
//         })
//     })
// })


// import fetch from 'node-fetch';
// import Unsplash, { toJson } from 'unsplash-js';
// global.fetch = fetch;

// const unsplash = new Unsplash({ accessKey: 'G_CjeO14tZA1Keu2rJI-Q9vgHfvuOhUrB9JEgPBawDU' });

// unsplash.photos.listPhotos(1, 3, "apartment") 
//     .then(toJson)
//     .then(json => {
//         json.forEach(item => {
//             const image = `<img src="${item.urls.regular}" />`
    
//             // console.log(item.urls.regular)

//             for (let slide = 0; slide < item.length; slide++) {
//                 const element = slide[i];

//                 console.log(element)

//                 for (let image = 0; image < slides.length; image++) {
//                     const element = slides[image];

//                     // console.log(element)
//                 }
                
//             }
    
//             slides.forEach(slide => {
//                 // console.log(slide)
//             //     const fig = slide.querySelector('.')
//             //     slide.appendChild(image)
//             })
//         })
//     })
    // .catch((err) => {
    //     console.log(err)
    //     res.status(200).send({'message error': err})
    // })

// const slides = document.querySelectorAll('.hero-slide')
// // json.forEach(e => {
// //     console.log(e.urls)
// // });
// for(let i = 0 ; i < json.length ; i++ ) {
//     // const image = document.createElement('img');
//     // image.src = json[i].urls.thumb;

//     // slides.forEach((slide) => {
//     //     slide.appendChild(image);
//     // })
// }
// async function getImages(query){
//     let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);

//     let jsonResponse = await response.json();
//     let imagesList = await jsonResponse.results;
//     createImages(imagesList);
// }


// unsplash.photos.listPhotos(1, 3, "latest")
//   .then(toJson)
//   .then(json => {
//     console.log(json)
//     const slides = document.querySelectorAll('.hero-slide')

//     slides.forEach((slide) => {
//         console.log(slide)
//     })
// });