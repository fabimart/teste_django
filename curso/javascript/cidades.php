<?php
$uf = $_GET['uf'];
$cidades = array();

switch($uf) {
	case 'RS':
		$cidades = array('POA', 'Canoas');
	break;
	case 'SC':
		$cidades = array('Floripa', 'Camboriu');
	break;
}

foreach ($cidades as $cidade) {
	echo '<option value="0">' . $cidade . '</option>';
}
?>