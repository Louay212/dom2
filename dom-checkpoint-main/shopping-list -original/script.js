var plusBtn = document.getElementsByClassName('plus-btn')
console.log(plusBtn)
for(let i = 0 ; i<plusBtn.length;i++){
    plusBtn[i].addEventListener('click', function(){
        plusBtn[i].previousElementSibling.value++
    })
}

var minus = document.getElementsByClassName('minus-btn')

for(let i = 0 ; i < minus.length; i++){
    let min = minus[i];
    min.addEventListener('click',function(){
        if( min.nextElementSibling.value > 1)
        min.nextElementSibling.value--;
    });   
}

var likes = document.getElementsByClassName("like");

for(let i = 0; i < likes.length; i++){
    let like = likes[i];
    likes[i].addEventListener("click", function(){
        if(like.style.color == "red"){
            like.style.color = "black";
        }else{
            like.style.color = "red";
        }
    });
}
