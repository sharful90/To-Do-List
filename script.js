

const qs=(q)=>{
  return document.querySelector(q);
}

let inp=qs(".textIn")
    btn=qs(".btn")
    main=qs(".myClass");
let uu=document.createElement("ul");
    main.appendChild(uu);


inp.addEventListener("keyup",(e)=>{

  if (e.keyCode === 13) {
    e.preventDefault();

    if(inp.value==""){
      inp.placeholder="Please enter any one";
      }else{
        let l=document.createElement("li");
        let a=document.createElement("a");
        uu.appendChild(l);
        l.appendChild(a);
        a.innerText=inp.value;
        inp.value="";
      }
 
}else{
  btn.addEventListener("click",()=>{
    if(inp.value==""){
         inp.placeholder="Please enter any one";
    }else{
      let l=document.createElement("li");
      let a=document.createElement("a");
      uu.appendChild(l);
      l.appendChild(a);
      a.innerText=inp.value;
      inp.value="";
    }
});

}

});
