class AddBook{
   
    constructor(){
        const storedBooks = localStorage.getItem('bookDetails');
        this.books = storedBooks ? JSON.parse(storedBooks) : [];
    }
    display(){
      const getData=localStorage.getItem('bookDetails');
      const infoDisplay=document.getElementById('infoDisplay');
      
      const bookData=JSON.parse(getData); 
      bookData.forEach((current,index) => {
        const indexNumber=document.createElement('h3')
        const tiau=document.createElement('h3');
        const rmv=document.createElement('button');
        const divsec=document.createElement('div');
        divsec.classList.add('divsec');
        
         
        if(infoDisplay){
            indexNumber.textContent=index;
            tiau.textContent=`Title :${current.title} by Author : ${current.author}`;
            rmv.textContent='Remove';
            rmv.classList.add('rmv');
            divsec.appendChild(indexNumber);
            divsec.appendChild(tiau);
            divsec.appendChild(rmv);
            infoDisplay.appendChild(divsec);
    
          }
        
      });
   
      
    
    }

    add(title,author){
        const book={title,author}
        this.books.push(book);
        localStorage.setItem('bookDetails',JSON.stringify(this.books));

        
    }

    remove(){

    const rmv=document.querySelector('.rmv')
    let storedBooks = localStorage.getItem('bookDetails');
        storedBooks=JSON.parse(storedBooks);
    rmv.addEventListener('click',(e)=>{
        storedBooks
        const currentChild=e.target;
        const currentParent=currentChild.parentNode;
        console.log(currentParent.textContent)
        currentParent.remove();

        console.log("hello pakistan");
    })

    }
}

const addBtn=document.getElementById('addBtn');
const objData=new AddBook();
if(addBtn){
    addBtn.addEventListener('click',()=>{
        const title=document.getElementById('title').value;
        const author=document.getElementById('author').value;
        objData.add(title,author);
        

            })
        }
    
objData.display();
objData.remove();
fetch('/navbar.html').then(res=>res.text())
.then(getplainHtml=>document.getElementById('navbar').innerHTML=getplainHtml)
.catch(error => console.log("Navbar loading failed",error));




