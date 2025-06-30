class AddBook{
   
    constructor(){
        const storedBooks = localStorage.getItem('bookDetails');
        this.books = storedBooks ? JSON.parse(storedBooks) : [];
    }
    display(){
      const getData=localStorage.getItem('bookDetails');
      const infoDisplay=document.getElementById('infoDisplay');
      infoDisplay.innerHTML='';
      if (!getData || getData === '[]') {
        infoDisplay.innerHTML = '<h3>No books available</h3>';
        return;
      }
      else{
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
      
    
    }

    add(title,author){
        const book={title,author}
        this.books.push(book);
        localStorage.setItem('bookDetails',JSON.stringify(this.books));

        
    }

    bookRemove(){

    const rmv=document.querySelectorAll('.rmv');
    rmv.forEach((current,index)=>{
        current.addEventListener('click',(e)=>{
            if (this.books){
             const currentChild=e.target;
             const currentParent=currentChild.parentNode
             console.log('calling from event listener')
             this.books.splice(index,1);
             currentParent.remove();
             localStorage.setItem('bookDetails', JSON.stringify(this.books));
             }
             
            this.display();
            this.bookRemove();
        });
         
       
    });

    }


}

const addBtn=document.getElementById('addBtn');
const objData=new AddBook();
if(addBtn){
    addBtn.addEventListener('click',()=>{
        const title=document.getElementById('title');
        const author=document.getElementById('author');
        if(title.value === '' || author.value === ''){
            alert('Please fill in both fields');
            return;
        }
       else{
        objData.add(title.value,author.value);
        title.value = '';
        author.value = '';
        alert ('Book added successfully');
        }

            })
        }
    
objData.display();
objData.bookRemove();
fetch('/navbar.html').then(res=>res.text())
.then(getplainHtml=>document.getElementById('navbar').innerHTML=getplainHtml)
.catch(error => console.log("Navbar loading failed",error));




