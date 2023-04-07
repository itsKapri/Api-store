async function store(url) {
  let data = await fetch(url);
  let actualdata = await data.json();
  console.log(actualdata);
  let str = "";
  for (let i = 0; i < actualdata.length; i++) {
    str = str + `<div class="col-md-3">
        <div class="card">
        <div class="img-body">
        <img src="${actualdata[i].image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">${actualdata[i].title.slice(0, 10)}</h5>
          <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          <div class="flex"><div class="price">$${actualdata[i].price}</div>
          <div class="btn btn-primaryer"><i class="fa-sharp fa-solid fa-cart-shopping"></i></div>
          </div>
        </div>
      </div>
      </div>`
  }
  document.querySelector(".contant").innerHTML = str;

};
function electronics(){
  store('https://fakestoreapi.com/products/category/electronics');
}
function men_clothing(){

  store("https://fakestoreapi.com/products/category/men's%20clothing")
}
function women_clothing(){

  store("https://fakestoreapi.com/products/category/women's%20clothing")
}

function jewelery(){

 store("https://fakestoreapi.com/products/category/jewelery")
}
function all(){
  store("https://fakestoreapi.com/products")
 }
store('https://fakestoreapi.com/products');


const popup=document.querySelector(".popup");
const close=document.querySelector(".close");
window.onload=(()=>{
    setTimeout(() => {
        popup.style.display="block";
    }, 2000);
})
close.addEventListener("click",()=>{
    popup.style.display="none";
    
})

{/* <p class="card-text">${actualdata[i].description.slice(0,23)}..</p> */ }

// function quantity(){
//   let plus=document.querySelector(".plus");
//   let num=document.querySelector(".num");
//   let minus=document.querySelector(".minus");

//   let a=1;
//   plus.addEventListener("click",()=>{
//     a++;
//     num.innerText=a;
//   })
//   minus.addEventListener("click",()=>{
//     a--;
//     num.innerText=a;
//   })
// }
// quantity();
