/* pesquisas apontam que só vale a pena abastecer com Álcool se o valor do litro dele for de no máximo 70% do valor da Gasolina, 
pois os carros consomem 30% mais combustível no Álcool. */

function calculadora() {
  var alcool = parseFloat(document.getElementById("alcool").value);
  var gasol = parseFloat(document.getElementById("gasol").value);    
  var result = (alcool/gasol);
  
  if (result <= 0.7){
    alert("Abasteça com alcool");    
  } else {
    alert("Abasteça com gasolina");    
  }
}