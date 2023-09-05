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

    if(title=='' || author=='' || page==''){
        title.setCustomValidity("Please fill out this field");
    }
    else{
        $('#myModal').modal('hide');
    }

    var book=new Book(title,author,page,readit);
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

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const library=document.querySelector("#library");

function displayBooks(book){
        const container=document.createElement("div");
        container.classList.add("container");

        const divTitle=document.createElement("div");
        divTitle.textContent='"'+book.title+'"';
        container.appendChild(divTitle);
        
        const divAuthor=document.createElement("div");
        divAuthor.textContent=book.author;
        container.appendChild(divAuthor);
        
        const divPage=document.createElement("div");
        divPage.textContent=book.page+" pages";
        container.appendChild(divPage);
        container.style.width='300px';

        const btn=document.createElement("button");
        const removeBtn=document.createElement("button");

        isRead(book.readit,btn);

        btn.onclick=()=>{
            book.readit=!book.readit;
            isRead(book.readit,btn);
        }

        removeBtn.onclick=()=>{
            container.remove();
        }

        container.appendChild(btn);
        container.appendChild(removeBtn);
        btn.style.width="100px";
        btn.style.height="35px";
        btn.style.borderRadius="8%";

        removeBtn.style.width="100px";
        removeBtn.style.height="35px";
        removeBtn.style.borderRadius="8%";
        removeBtn.textContent="Remove";

        /*container.style.display="flex";
        container.style.flexDirection="column";
        container.style.alignItems="center";
        container.style.gap="10px";
        container.style.padding="0";
        container.style.fontSize="20px";
        container.style.background="blue";*/
        library.appendChild(container);

}

function isRead(control,element){
    if(control){
        element.textContent="Read";
        element.style.background="green";
    }else{
        element.textContent="Not Read";
        element.style.background="red";
    }
}
