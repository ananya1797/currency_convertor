let droppy=document.querySelectorAll(".droppy");

for(let select of droppy){
    for(code in countryList){
        let op=document.createElement("option");
        op.innerText=code;
        op.value=code;
        if(select.id==="id1" && code==="USD")
            {
                op.selected="selected";
            }
            if(select.id==="id2" && code==="INR")
                {
                    op.selected="selected";
                }
        select.append(op);
    }
    select.addEventListener("change",(event)=>{
     updateflags(event.target);
    });
}


function updateflags(element){
    console.log(element.value);
    let cname=countryList[element.value];
    let newsrc=`https://flagsapi.com/${cname}/shiny/64.png`;
    let img=element.parentElement.parentElement.querySelector("img");
    img.src=newsrc;
}

let fromcurr=document.querySelector("#id1");
let tocurr=document.querySelector("#id2");
let input=document.querySelector("input");
let msg=document.querySelector(".msg");

let btn=document.querySelector("form button");
btn.addEventListener("click", async (event) => {
    event.preventDefault(); 
    let fromcurrval=fromcurr.value.toLowerCase();
    let tocurrval=tocurr.value.toLowerCase();
    console.log(fromcurrval, tocurrval);

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrval}.json`;
    let response= await fetch(url);
    let data= await response.json();
    const exchangerates=data[fromcurrval];
    let rate=exchangerates[tocurrval];
    let val=input.value;
    let amt=val*rate;
    msg.innerText=`${val} ${fromcurr.value} = ${amt} ${tocurr.value}`;
    
})