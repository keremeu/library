// Data Structures

class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
    }
  }

  class Library {
    constructor() {
      this.books = []
    }
  
    addBook(newBook) {
        this.books.push(newBook)
    }
  }
  
  const library = new Library()

// Interface
const Cards = document.getElementById("Cards")
const addBookBtn = document.getElementById("addBookBtn")
const overlay = document.getElementById("overlay")
const addBookForm = document.getElementById("addBookForm")


function createBookCard(book) {
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

    if (book.isRead) {
        readBtn.textContent = "Read"
        readBtn.style.backgroundColor = "lightgreen"
    } else {
        readBtn.textContent = "Not Read"
        readBtn.style.backgroundColor = "red"
    }

    title.textContent = `Title: ${book.title}`
    author.textContent = `Author: ${book.author}`
    pages.textContent = `Page: ${book.pages}`
    removeBtn.textContent = "Remove"
    readBtn.onclick = toggleIsRead
    
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(cardBtns)
    cardBtns.appendChild(readBtn)
    cardBtns.appendChild(removeBtn)
    Cards.prepend(bookCard)
}

function createAddBookBtn () {
    const addBookBtn = document.createElement("button")
    addBookBtn.setAttribute("id", "addBookBtn")
    addBookBtn.textContent = "Add Book"
    Cards.appendChild(addBookBtn)
    addBookBtn.onclick = openNewBookForm
}

function openNewBookForm() {
    overlay.style.display = "block"
}

function closeNewBookForm(e) {
    if (e.target == overlay) {
        overlay.style.display = "none"
    }
}

const getBookFromInput = () => {
    const title = document.getElementById("inputTitle").value
    const author = document.getElementById("inputAuthor").value
    const pages = document.getElementById("inputPages").value
    const isRead = document.getElementById("isRead").checked
    return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookFromInput()
    library.addBook(newBook)
    updateCards()
    overlay.style.display = "none"
}

const resetCards = () => {
    Cards.innerHTML = ""
}

const updateCards = () => {
    resetCards ()
    createAddBookBtn()
    for (let book of library.books) {
        createBookCard(book)
    }
}

const toggleIsRead = (e) => {
    if (e.target.textContent == "Read") {
        e.target.textContent = "Not Read"
        e.target.style.backgroundColor = "red"
    } else {
        e.target.textContent = "Read"
        e.target.style.backgroundColor = "lightgreen"
    }
}

addBookBtn.onclick = openNewBookForm
window.onclick = closeNewBookForm
addBookForm.onsubmit = addBook
 