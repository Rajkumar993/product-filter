const searchBtn= document.getElementById('searchBtn');
const all= document.getElementById('all');
const pizza= document.getElementById('pizza');
const cake= document.getElementById('cake');
const iceCream= document.getElementById('icecream');

const imgs=document.querySelectorAll('img')
console.log(imgs)
searchBtn.addEventListener('keyup',()=>{
  const tar=searchBtn.value;
 imgs.forEach(img=>{
const data=img.dataset.item
  if(data.includes(tar)){
    img.style.display='block'
  
  }
  else{
    img.style.display='none'
  }
 })

})

pizza.addEventListener('click',()=>{
  console.log(pizza.innerText)
  imgs.forEach(img=>{
   const data= img.dataset.item
    if(data==pizza.innerText){
      img.style.display='block'
    }else
    img.style.display='none'
  })
  searchBtn.value=''
})
all.addEventListener('click',()=>{
  console.log(all.innerText)
  imgs.forEach(img=>{
   img.style.display='block'
  })
  searchBtn.value=''
})
iceCream.addEventListener('click',()=>{
  console.log(iceCream.innerText)
  imgs.forEach(img=>{
   const data= img.dataset.item
    if(data==iceCream.innerText){
      img.style.display='block'
    }else
    img.style.display='none'
  })
  searchBtn.value=''
})
cake.addEventListener('click',()=>{
  searchBtn.value=''
  console.log(iceCream.innerText)
  imgs.forEach(img=>{
   const data= img.dataset.item
    if(data==cake.innerText){
      img.style.display='block'
    }else
    img.style.display='none'
  })
})