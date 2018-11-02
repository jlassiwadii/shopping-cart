


function add(id) {

  Array.from(document.getElementsByClassName('qte'))[id - 1].value++
  sum();

}




function decrease(id) {

  if (Array.from(document.getElementsByClassName('qte'))[id - 1].value > 0)

    Array.from(document.getElementsByClassName('qte'))[id - 1].value--

  sum();

}

function sum() {
  var pricetable = document.getElementsByClassName("price");
  var qtetable = document.getElementsByClassName("qte");

  var sum = 0;
  for (var i = 0; i < pricetable.length; i++) {
    sum = sum + pricetable[i].value * qtetable[i].value
    document.getElementsByClassName("total")[0].value = sum;
  }
}


function select(id) {
  document.getElementsByClassName("item")[id-1].style.backgroundColor = "lightblue";
  

}
function delet(id) {
  document.getElementsByClassName("item")[id-1].style.backgroundColor = "white";

  //var elem = document.getElementById("item");
  //elem.parentNode.removeChild(elem);

  //var elem = document.getElementById("item");
  //elem.parentNode.removeChild(elem);
  //sum()

}


function addItem() {
  //let newitem = document.getElementById('item');
  //document.getElementById("bag").innerHTML += "<div  class='item'>" + newitem.innerHTML + "</div>"
}