fetch("../data/data.json").then(response=>{
return response.json()
}).then(data=>{
    console.log(data)
    displayData(data)
})
function displayData(info){
   // console.log(info.mobiles[info.mobiles.length-1])
/*var d=document.getElementsByTagName("div");
console.log(d[1].innerHTML) 
var element=document.querySelectorAll(".div")
console.log(element[0])*/
/*var bodyElement=document.querySelector(".div")
var a=document.createElement("body")
a.textContent="this is body"
console.log(a)
bodyElement.append(a)
var sample=document.createElement("img")
sample.src="img/celkon.jpg";
sample.classList.add("class1","class2","class3")
sample.classList.remove("class3")*/
var bodyElement=document.querySelector("body");
//bodyElement.append(sample)
var row=document.createElement("section")
row.classList.add("row","justify-content-center");
bodyElement.append(row)
info.mobiles.map(value=>{
    var col=document.createElement("article")
    col.classList.add("col-sm-10","col-md-6","col-lg-3");
    row.append(col)
    //card
    var card=document.createElement("div");
    card.classList.add("card","mt-3")
    //card body
    var cardBody=document.createElement("div");
    cardBody.classList.add("card-body")
    //img
    var imgElement=document.createElement("img");
    imgElement.src=value.image;
    imgElement.classList.add("img-responsive")
    imgElement.alt=value.name;
    //image
    var name=document.createElement("h2")
    name.textContent=value.name;
    name.classList.add("text-center", "text-success")
    //price
    var price=document.createElement("p")
    price.classList.add("text-center","text-secondary")
    price.innerHTML="<s>₹" + value.price+"/-</s>";
    //org price
    var origprice=document.createElement("p")
    origprice.classList.add("text-center","text-primary")
    origprice.innerHTML="<p>₹"+value.originalprice+"/-</p>";
    //buttonparent
    var buttonParent=document.createElement("div");
    buttonParent.classList.add("d-grid","gap-2");
//button
    var button=document.createElement("button");
    button.classList.add("btn","btn-primary","btn-block");
    button.textContent="Add to cart"
    buttonParent.append(button)
    

    cardBody.append(imgElement);
    cardBody.append(name);
    cardBody.append(price);
    cardBody.append(origprice);
    cardBody.append(buttonParent);

    card.append(cardBody);
    col.append(card);

})
}