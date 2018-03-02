var form = document.getElementById("formulario");
var campoArquivo = document.getElementById("arquivo");
var uploadBnt = document.getElementById("enviar");
var barra = document.getElementById("progresso");
form.onsubmit = function(e){ //"e" vai armazenar o ato do submit
	e.preventDefault(); //vai previnir que o fomulario envie os arquivos de maneira direta
	uploadBnt.value = "Enviando...";
	var arquivos = campoArquivo.files;
	var formData = new FormData(); // instancia dos dados do fomulario
	for (var i = 0; i < arquivos.length; i++) {
		var arquivo = arquivos[i];
		formData.append(i, arquivo, arquivo.name);//pega dados de formulario e anexa tudo junto e envia
	}
	var ajax = iniciarAjax();
	ajax.open("POST", "processa.php", true); // estar preparando o arquivo para o processa.php
	ajax.upload.onloadstart = function(){ //vai trabalhar o inicio do arquivo
		barra.value = 0; //inicio da barra sempre 0
	};
	ajax.upload.onloadprogress = function(e){ //a cada byte enviado sera executado
		if (e.lengthComputable) { // se o tamanho for calculado
			barra.max = e.total; //o maximo da barra recebe o valor total
			barra.value = e.loaded; //a barra recebe o envio de envio
		}
	};
	ajax.upload.onloadend = function(e){ // quando enviar
		barra.value = e.loaded; // para a barra receber o 100%
	};
	ajax.send(formData);//vai enviar o arquivo para o processa.php via post em forma assíncrona
	ajax.onload = function () {
		if(ajax.status === 200){ // se o meu status me retornar tudo certo
			uploadBnt.value = 'Enviar dados';
		}else{
			alert('Erro ao processar');
		}
	};
		
};
