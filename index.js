function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == "#000000"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }
    else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }
}











let animation = anime({
    targets: 'div',
    translateX: -90,
    translateY: 20,
    borderRadius: 50,
    duration: 3000,
  });  




 