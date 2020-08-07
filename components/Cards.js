// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
        // deal with the response data in here
        // console.log(response.data.articles)
        const keys = Object.keys(response.data.articles)
        keys.forEach(key=>{
            response.data.articles[key].forEach(item => {
                const tempCard = cardCreator(item)  
                const cardsContainer = document.querySelector('.cards-container')
                cardsContainer.appendChild(tempCard)
             })
             
        })
        
         
    })
    .catch( err => {
        // deal with the error in here
        console.log("error:", err)
    })




function cardCreator(cardObj){
    const cardDiv = document.createElement('div')
    const headlinediv = document.createElement('div')
    const  authorDiv= document.createElement('div')
    const  imgContainerDiv= document.createElement('div')
    const  img= document.createElement('img')
    const  nameSpan= document.createElement('span')

     cardDiv.classList.add('card')
     headlinediv.classList.add('headline')
     authorDiv.classList.add('author')
     imgContainerDiv.classList.add('img-container')

    headlinediv.textContent = cardObj.headline
    img.src = cardObj.authorPhoto
    nameSpan.textContent = `By ${cardObj.authorName}`

    imgContainerDiv.appendChild(img)

    authorDiv.appendChild(imgContainerDiv)
    authorDiv.appendChild(nameSpan)
    cardDiv.appendChild(headlinediv)
    cardDiv.appendChild(authorDiv)
    
    cardDiv.addEventListener('click', (event)=>{
        console.log(cardObj.headline)
    })

    return cardDiv
}

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>