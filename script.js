const addBook = document.querySelector("#myBtn");

addBook.onclick = () => {
    document.querySelector("#title").value='';
    document.querySelector("#author").value='';
    document.querySelector("#page").value='';
    document.querySelector("#readit").checked=false;
};


const formSubmit = document.querySelector("#formSubmit");
formSubmit.onclick=()=>{
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let page=document.querySelector("#page").value;
    let readit=document.querySelector("#readit").checked;

    var book=new Book(title,author,page,readit);
    book.print()
    addBookToLibrary(book);
    displayBooks(myLibrary[myLibrary.length-1]);
};

const myLibrary=[];

function Book(title,author,page,readit){
    this.title=title;
    this.author=author;
    this.page=page;
    this.readit=readit;
}

Book.prototype.toString=function(){
    return this.title+" "+this.author+" "+this.page;
}

Book.prototype.print=function(){
    console.log(this.toString());
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const library=document.querySelector("#library");

function displayBooks(book){
        const container=document.createElement("div");

        const divTitle=document.createElement("div");
        divTitle.textContent=book.title;
        container.appendChild(divTitle);
        
        const divAuthor=document.createElement("div");
        divAuthor.textContent=book.author;
        container.appendChild(divAuthor);
        
        const divPage=document.createElement("div");
        divPage.textContent=book.page;
        container.appendChild(divPage);
        container.style.width='200px';

        library.appendChild(container);
}