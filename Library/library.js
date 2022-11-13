let myLibrary = [];
const addTitle = document.getElementById("title");
const addAuthor = document.getElementById("author");
const addPages = document.getElementById("pages");
const submitButton = document.getElementById("addBook");

let bookEdit
let bookRemove
function Book(Title, Author, numP, read) {
    this.title = Title;
    this.author = Author;
    this.pages = numP;
    this.read = read;
}

Book.prototype.info = function () {
    return (this.title + ", " + "author is " + this.author);
}

//Book.prototype.addBookToLibrary = function () {
//}
//theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
//LOTR1 = new Book("Lord of The Rings: Fellowship of the ring", "J.R.R. Tolkien", 423, false)
//LOTR2 = new Book("Lord of The Rings: The Two Towers", "J.R.R. Tolkien", 352, false)

function isRead(){
    const isRead = document.querySelector('input[name="read"]:checked')
    console.log(isRead.value)
        if (isRead.value=='yes'){
            return true
        }
        else return false

}
function addBookToLibrary() {

    let title = addTitle.value;
    let author = addAuthor.value;
    let pages = addPages.value;
    let read = isRead()
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);


}

function clearForm() {
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
}

function createLibrary() {
    const tbody = document.getElementById('tableBody');
    tbody.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr');
        row.setAttribute('id', 'book'+i)
        tbody.appendChild(row);
        for (let j = 0; j < Book.length; j++) {
            const bookInfo = document.createElement('td')
            switch (j) {
                case 0:
                    bookInfo.textContent = myLibrary[i].title;
                    break;
                case 1:
                    bookInfo.textContent = myLibrary[i].author;
                    break
                case 2:
                    bookInfo.textContent = myLibrary[i].pages;
                    break
                case 3:
                    if (myLibrary[i].read){
                        bookInfo.textContent = "read"
                    }
                     else {
                         bookInfo.textContent = "not read"
                    }
                    break
            }
            bookInfo.classList.add('Book','book-info')
            row.appendChild(bookInfo)

        }

        bookRemove = document.createElement('td')
        bookRemove.classList.add('Book','book-remove')
        bookRemove.textContent = 'delete'
        bookEdit = document.createElement('td')
        bookEdit.classList.add('Book','book-edit')
        bookEdit.textContent = 'edit'
        row.appendChild(bookEdit)
        row.appendChild(bookRemove)
    }
}

submitButton.addEventListener('click', () => {
    event.preventDefault()
    addBookToLibrary()

    clearForm()
    createLibrary()
})
//createTable()