var form = document.getElementById("formulario");
var campoArquivo = document.getElementById("arquivo");
var uploadBnt = document.getElementById("enviar");
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
	ajax.send(formData);//vai enviar o arquivo para o processa.php via post em forma assíncrona
	ajax.onload = function () {
		if(ajax.status === 200){ // se o meu status me retornar tudo certo
			uploadBnt.value = 'Enviar dados';
		}else{
			alert('Erro ao processar');
		}
	};
		
};
