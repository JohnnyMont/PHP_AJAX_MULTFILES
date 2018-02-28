<?php
	foreach ($_FILES as $item) {
		$destino = "img/{$item['name']}";
		move_uploaded_file($item['tmp_name'], $destino);
	}
?>