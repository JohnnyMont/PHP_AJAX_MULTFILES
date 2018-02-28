function iniciarAjax(){
	var objetoAjax = true; // Variável que recebe obj
	if(window.XMLHttpRequest){ // Firefox e demais Browsers
		objetoAjax = new XMLHttpRequest();
	}else if(window.ActiveXObject){ // IE 9 ou >
		objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
		if(!objetoAjax){ // IE 8 ou < 
			objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objetoAjax;
}
function mostrarResposta(elemento,ajax){
	if(ajax.readyState == 4){ // Condição baseada no estado da REQUISIÇÃO 
		if(ajax.status == 200 || ajax.status == 304){ // Condição baseada no estado da RESPOSTA
			elemento.innerHTML = ajax.responseText; 
		}else{
			alert("O CONTEÚDO NÃO SERÁ CARREGADO! Seu navegador não possue recursos Ajax.", function(){
    		alertify.warning('Verifique seu navegador! = )');
  });
		}
	}
}
function requisitarArquivo(arquivo,elemento){
	var ajax = iniciarAjax(); // Inicia Ajax
	if(ajax){ // Verifica se Ajax está ativo
		ajax.onreadystatechange = function(){ // Evento de mudança de estado
		mostrarResposta(elemento,ajax); // Execução da resposta da requisição
		};
	}
	ajax.open("GET", arquivo, true); // Define a requisição
	ajax.send(null); // Envia requisição

	
}
function carregando(container){
	while(container.hasChildNodes()){
		container.removeChild(container.lastChild);
	}
	var imagem = document.createElement("img");
	imagem.setAttribute("src","preload.gif");
	imagem.setAttribute("alt","Carregando...");
	container.appendChild(imagem);
}
