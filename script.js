const Cards = document.getElementById("Cards")
const addBookBtn = document.getElementById("addBookBtn")

addBookBtn.onclick = addNewBook

function addNewBook() {
    const bookCard = document.createElement("div")
    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const cardBtns = document.createElement("div")
    const readBtn = document.createElement("button")
    const removeBtn = document.createElement("button")

    bookCard.classList.add("card")
    title.classList.add("cardInfo")
    author.classList.add("cardInfo")
    pages.classList.add("cardInfo")
    cardBtns.classList.add("cardButtons")
    readBtn.setAttribute("id", "readBtn")
    removeBtn.setAttribute("id", "removeBtn")

    title.textContent = "Title:"
    author.textContent = "Author:"
    pages.textContent = "Pages:"
    readBtn.textContent = "READ"
    removeBtn.textContent = "Remove"
    
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(cardBtns)
    cardBtns.appendChild(readBtn)
    cardBtns.appendChild(removeBtn)
    Cards.prepend(bookCard)



}