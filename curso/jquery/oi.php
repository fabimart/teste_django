<?php
sleep(3);

$ret = 'oi';

if ( !empty($_POST) ) {
	if ( !empty($_POST['nome']) ) {
		$ret = $ret . " " . $_POST['nome'];
	}
	if ( !empty($_POST['sobrenome']) ) {
		$ret = $ret . " " . $_POST['sobrenome'];
	}
}

echo $ret;

?>