let myLibrary = [];

function Book(title, author, numPages, isRead, info) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.info = info;
    this.getInfo = function() {
        return this.info;
    }
}

function addBookToLibrary(title, author, numPages, isRead, info) {
    myLibrary.push(new Book(title, author, numPages, isRead, info))
}

function createCard() {

}

function displayBooks() {
    
}