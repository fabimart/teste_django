function loud()
{
//	debuga();

	console.log("vai!");
	sandy();
}

function inicializa(metodo, url, assincrono) {
	var xhr = new XMLHttpRequest();
	xhr.open(metodo, url, assincrono);
	xhr.onreadystatechange = function() { processa(xhr); };
	xhr.send(null);
}

function carregaCidades()
{
		selecao = document.cadastro.uf.value;
		inicializa('GET', 'cidades.php?uf=' + selecao, false);
}

function processa(xhr) {
	if ( xhr.readyState == 4 ) {
		if ( xhr.status == 200 ) {
			resposta = xhr.responseText;
				
			document.cadastro.cidade.innerHTML = resposta;
		}
	};
}


function debuga()
{
}