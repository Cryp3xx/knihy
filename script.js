let bookArray = []

function addBook() {
    let book = {
        title: "",
        author: "",
        genre: "",
        publishedYear: ""
    }

    book.title = document.getElementById("titleInput").value
    book.author = document.getElementById("authorInput").value
    book.genre = document.getElementById("genreInput").value
    book.publishedYear = document.getElementById("publishedYearInput").value

    bookArray.push(book)
    console.log(bookArray)
}

function displayBooks() {
    console.log(bookArray)

    let output = document.getElementById("booksp")

    output.innerHTML = ""

    for(let i=0; i < bookArray.length; i++) {
        output.innerHTML += "Title: " + bookArray[i].title + "<br>"
        output.innerHTML += "Author: " + bookArray[i].author + "<br>"
        output.innerHTML += "Genre: " + bookArray[i].genre + "<br>"
        output.innerHTML += "Published Year: " + bookArray[i].publishedYear + "<br>"
        output.innerHTML += "<br>"
    }
}