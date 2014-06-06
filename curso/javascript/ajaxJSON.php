<?php
$resposta = array(
    'produtos' => array(
        'c01' => array(
            'nome' => 'Foo'
        ),
        'c02' => array(
            'nome' => 'Bar'
        )
    )
);

header('Content-type: application/json; charset=utf8');
echo json_encode($resposta);
?>
