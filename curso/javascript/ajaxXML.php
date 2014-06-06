<?php
$resposta = '<?xml version="1.0" encoding="utf8"?>
<produtos>
    <produto id="c01">
        <nome>Foo</nome>
    </produto>
    <produto id="c02">
        <nome>Bar</nome>
    </produto>
</produtos>';

header('Content-type: application/xml; charset=utf8');
echo $resposta;
?>
