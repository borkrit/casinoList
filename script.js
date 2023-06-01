const spin = document.querySelectorAll(".free-spin");

console.log(spin);

spin.forEach(item=> {
    item.addEventListener("click", (e) => {

        let popUp = e.currentTarget.parentElement.querySelector(".pop-up");
        let title = e.currentTarget.parentNode.parentElement
          .querySelector(".item__information")
          .querySelector(".item__title").textContent;
        const popUpTitle = popUp.querySelector(".pop-up__title");
        const popUpCode = popUp.querySelector(".pop-up__code");
        let text = popUp.querySelector(".code").textContent;
        const toolTip = popUp.querySelector(".tooltip");
        const closePopUp = popUp.querySelector(".pop-up__close");
        
        popUpTitle.innerText = `${item.textContent} at ${title.replace(
          "Review",
          ""
        )} `;
        popUp.style.display = "flex";
    
        popUpCode.addEventListener("click", () => {
          navigator.clipboard.writeText(text.trim()).then(() => {
    
            toolTip.style.display = "block";
    
            setTimeout(() => {
              toolTip.style.display = "none";
            }, 2000);
          });
        });
    
        closePopUp.addEventListener("click", () => {
          popUp.style.display = "none";
        });

       

       
        
       


      })
      

     
})


const list = document.querySelectorAll('.reviews__item')


const btnMore = document.querySelector('.load-more');


for(let i =0; i< list.length;i++){

    if(i>=4){
        list[i].style.display='none'
    }
}
btnMore.addEventListener('click',()=>{
    
    for(let i = 0; i< list.length;i++){
        list[i].style.display='flex'
    }
    btnMore.style.display = 'none'

})


