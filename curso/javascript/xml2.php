<?php
$xml = '<?xml version="1.0" encoding="utf8"?>
<cursos>
	<curso codigo="c01">
		<nome>Javascript Avançado</nome>
		<ch>20</ch>
		<tel>
			<ddd>51</ddd>
			<numero>9898989</numero>
		</tel>
	</curso>
	<curso codigo="c01">
		<nome>PHP</nome>
		<ch>32</ch>
	</curso>
</cursos>';
		
header('Content-type: application/xml; charset=utf8');
echo $xml;
?>