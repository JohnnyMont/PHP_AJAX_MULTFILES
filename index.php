<!DOCTYPE html>
<html>
<head>
	<title>Ativida ajax</title>
</head>
<body>
	<form action="processa.php" id="formulario" enctype="multipart/form-data" method="post" >
		<input type="file" name="arquivo[]" id="arquivo" multiple/>
		<input type="submit" name="enviar" id="enviar" />
	</form>	
</body>
<script src="js/ajaxoficial.js"></script>
<script src="js/app.js"></script>
</html>