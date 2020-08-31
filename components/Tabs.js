// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then( response => {
        // deal with the response data in here
        // console.log(response.data.topics[0])
        response.data.topics.forEach(item => {
            const topic = TopicCreator(item)
            const topics = document.querySelector('.topics')
            topics.appendChild(topic)
        })
    })
    .catch( err => {
        // deal with the error in here
        console.log('error!', err)
    })

function TopicCreator(item){
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = `${item}`

    return tabDiv
}