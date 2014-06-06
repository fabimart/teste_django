<?php
$xml = '<p id="resposta">
			<b>Resposta em XML</b>
		</p>';
		
header('Content-type: application/xml; charset=utf8');
echo $xml;
?>