const addBook = document.querySelector("#add");
const form = document.getElementById("myForm");

addBook.onclick = () => {

    form.style.display = 'flex';
    form.style.flexDirection = "column";
    form.style.gap = "5px";
    form.style.alignItems = "center";
    document.querySelector("#title").value='';
    document.querySelector("#author").value='';
    document.querySelector("#page").value='';
};


const addFormBtn = document.querySelector("#addForm");
addFormBtn.onclick=()=>{
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let page=document.querySelector("#page").value;

    console.log(title+author+page);

    form.style.display = 'none';
};
