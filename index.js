let bigimage=document.querySelector('.bigimage');
let newdiv=document.querySelector('.newdiv');
bigimage.addEventListener('click',divadd);
window.addEventListener('keydown',restore)

let bigimageimg=document.querySelector('.bigimageimg')
// stripimage.addEventListener('click',imagechange);

function divadd(){
    newdiv.setAttribute('class','showdiv');
    let shoebox=document.querySelector('.shoeboxoff');
    shoebox.setAttribute('class','shoeboxon');
    let cross=document.querySelector('.cross')
    cross.addEventListener('click',restore);
    
}




function restore(){
    if (event.key==='Escape' || event.type==='click'){
        newdiv.setAttribute('class','newdiv');
    }
    
}





// image change function starts 


let img1=document.querySelector('#img1');
let img2=document.querySelector('#img2');
let img3=document.querySelector('#img3');
let img4=document.querySelector('#img4');

img1.addEventListener('click',imagechange);
img2.addEventListener('click',imagechange);
img3.addEventListener('click',imagechange);
img4.addEventListener('click',imagechange);



function imagechange(){
    let active;
    switch (event.target.id){
        case 'img1':
            if (typeof active==='undefined'){
                active=img1;
                 img1.classList.add('activestripimagelistitemimg');
                 bigimageimg.src='images/image-product-1.jpg';
                 break;

            }
            else{
            active.classList.remove('activestripimagelistitemimg');
            bigimageimg.src='images/image-product-1.jpg';
            img1.classList.add('activestripimagelistitemimg');
            active=Event.target;
            break;
            }
            
            
        case 'img2':
            if (typeof active==='undefined'){
                active=Event.target;
                img1.classList.remove('activestripimagelistitemimg')
                img3.classList.remove('activestripimagelistitemimg')
                img4.classList.remove('activestripimagelistitemimg')
                img2.classList.add('activestripimagelistitemimg');
                 bigimageimg.src='images/image-product-2.jpg';
                 break;

            }
            else{
                active.classList.remove('activestripimagelistitemimg');
                bigimageimg.src='images/image-product-2.jpg';
                img2.classList.add('activestripimagelistitemimg')
                active=Event.target;
                break;
            }
            
        case 'img3':
            if (typeof active==='undefined'){
                active=img3;
                img3.classList.add('activestripimagelistitemimg');
                 bigimageimg.src='images/image-product-3.jpg';
                 break;

            }
            else{
                active.classList.remove('activestripimagelistitemimg');
                bigimageimg.src='images/image-product-3.jpg';
                img3.classList.add('activestripimagelistitemimg')
                active=img3;
                break;
            }
            
        case 'img4':
            if (typeof active==='undefined'){
                active=img4;
                img4.classList.add('activestripimagelistitemimg');
                 bigimageimg.src='images/image-product-4.jpg';
                 break;

            }
            else{
            active.classList.remove('activestripimagelistitemimg');
            bigimageimg.src='images/image-product-4.jpg';
            img4.classList.add('activestripimagelistitemimg')
            active=img4;
            break;
            }
            

    }

}

// image change function ends 


// cart box open 

let cart=document.querySelector('.cartimg');
let cartbox=document.querySelector('.cartboxoff')
cart.addEventListener('click',cartboxopen);

let openbox=false;

function cartboxopen(){
    if (!openbox){
    cartbox.style.display='inline-block';
    openbox=true;
    }
    else {
    cartbox.style.display='none';
    openbox=false;
         
    }
}

// cart box close here 


// counter box logic starts here 

let plusbtn=document.querySelector('.plusimg');
let minusbtn=document.querySelector('.minusimg');

let count=0;
let counter=document.querySelector('.digits');
counter.textContent=count;
plusbtn.addEventListener('click',itemscount);
minusbtn.addEventListener('click',itemscount);

function itemscount(){
    if (event.target.className==='plusimg'){
        count+=1;
    }
    else if (count>0 && event.target.className==='minusimg'){
        count-=1;
    }
    counter.textContent=count;
}

// counterbox logic ends here 



// add to cart logic 

let cartbtn=document.querySelector('.addcart');
let nonemptycart=document.querySelector('.nonemptycart');
let emptycart=document.querySelector('.emptycart');
let nonemptypara=document.querySelector('.addedpara');
cartbtn.addEventListener('click',addtocart);




function addtocart(){
    if (count==0){
        emptycart.style.display='flex';
        nonemptycart.style.display='none';
    }
    else{
        emptycart.style.display='none';
        nonemptycart.style.display='inline-block';
        openbox=true;
        cartbox.style.display='inline-block';
        
        let totalvalue=(count*125.00).toFixed(2);
        nonemptypara.innerHTML='Fall limited edition Sneakers $125.00 x '+ count+"  " ;
        let totalvalueele=document.createTextNode(`${totalvalue}`)
        nonemptypara.appendChild(totalvalueele);
        totalvalueele.style.color='black';
    }

}

// add to cart logic close 


// remove from cart logic 


let removefromcart=document.querySelector('.removefromcart');
removefromcart.addEventListener('click',removecart);

function removecart(){
    count=0;
    addtocart();
    itemscount();
}


// responsive hamburgermenu click 



let backgroundblackdivoff=document.querySelector('.backgroundblackdivoff');

function backgroundblackdivon(){
    backgroundblackdivoff.setAttribute('class','backgroundblackdivon');

}

function backgroundblackdivofff(){
    backgroundblackdivoff.setAttribute('class','backgroundblackdivoff');
}

let menu=document.querySelector('.menu');
let hamburgermenu=document.querySelector('.hamburgermenu');
let hamburgermenucross=document.querySelector('.hamburgercross');

menu.addEventListener('click',menuopen);
hamburgermenucross.addEventListener('click',menuclose);

function menuopen(){
    hamburgermenu.style.display='flex';
    backgroundblackdivon();

}

function menuclose(){
    hamburgermenu.style.display='none';
    backgroundblackdivofff();
}




