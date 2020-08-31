// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const headerDiv = document.createElement('div')
    const spanDate = document.createElement('span')
    const h1 = document.createElement('h1')
    const spanTemp = document.createElement('span')

    headerDiv.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')
    spanDate.textContent = "MARCH 28, 2020"
    h1.textContent = "Lambda Times"
    spanTemp.textContent = "98°"


    headerDiv.appendChild(spanDate)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(spanTemp)

    return headerDiv;
}

const header = Header()
const headerContainerDiv = document.querySelector('.header-container')
headerContainerDiv.appendChild(header)

