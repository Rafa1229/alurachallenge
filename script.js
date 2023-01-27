var texto=document.querySelector('#text-area');


function encriptar(){
	var textoCriptografado=texto.value;
	console.log(texto);
	
	var resultadoTexto = textoCriptografado
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  console.log(resultadoTexto);

  document.querySelector('#resultado').innerHTML = resultadoTexto;
  document.querySelector('#esconder').style.display = 'flex';

  document.querySelector('.garoto').style.display = 'none';
  document.querySelector('.mensagem').style.display = 'none';


	
	

}

function desencriptar(){
	var textoCriptografado=texto.value;
	console.log(texto);
	
	var resultadoTexto = textoCriptografado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  console.log(resultadoTexto);

  document.querySelector('#resultado').innerHTML = resultadoTexto;
  document.querySelector('#esconder').style.display = 'flex';

  document.querySelector('.garoto').style.display = 'none';
  document.querySelector('.mensagem').style.display = 'none';


	
	

}


function copiarTexto(){
	var mensagem=document.getElementById("resultado");
	navigator.clipboard.writeText(mensagem.textContent);
  alert('Texto Copiado');
  resultado.value = mensagem.value;
}





// queryselector ele retorna somente o primeiro elemento (na ordem do documento).
//document.querySelector("td"); 
//querySelectorALL percorre todos os elementos, ex: retorna aos elementos de uma tabela ou lista com n elementos.
//document.querySelectorAll("#Paulo") #id .class
//O retorno do querySelectorAll é parecido com um array
// esse retorno é feito através de tags, seletores
// para percorrer uma lista com n elementos devemos usar o loop for.
//o método getElementById que retorna a referência do elemento através do seu id.
//getElementByClassName que vai retornar um vetor de objetos com todos os elementos filhos que possuem o nome da classe.
