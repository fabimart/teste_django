function loud()
{
//	debuga();

	sandy();
}

function inicializa(metodo, url, assincrono) {
	var xhr = new XMLHttpRequest();
	xhr.open(metodo, url, assincrono);
	xhr.onreadystatechange = function() { processa(xhr); };
	xhr.send(null);
}

function processa(xhr) {
	if ( xhr.readyState == 4 ) {
		console.log("xhr.status : " + xhr.status);
		if ( xhr.status == 200 ) {
			console.log("xhr.responseText : " + xhr.responseText);
			resposta = xhr.responseText;
			document.getElementById("conteudo").innerHTML = resposta;
		}
	};
}

function debuga()
{
}