function loud()
{
//	debuga();

	console.log("vai!");
	sandy();
}

function inicializaJSON(metodo, url, assincrono) {
	var xhr = new XMLHttpRequest();
	xhr.open(metodo, url, assincrono);
	xhr.onreadystatechange = function() { processaJSON(xhr); };
	xhr.send(null);
}

function inicializaXML(metodo, url, assincrono) {
	var xhr = new XMLHttpRequest();
	xhr.open(metodo, url, assincrono);
	xhr.onreadystatechange = function() { processaXML(xhr); };
	xhr.send(null);
}

function processaJSON(xhr) {
	if ( xhr.readyState == 4 ) {
		if ( xhr.status == 200 ) {
			eval("resposta = " + xhr.responseText + ";");
			
			for(n in resposta.produtos ) {
				document.getElementById("resposta").innerHTML += resposta.produtos[n].nome;
			}
		}
	};
}

function processaXML(xhr) {
	if ( xhr.readyState == 4 ) {
		if ( xhr.status == 200 ) {
			resposta = xhr.responseXML;
			nomes = resposta.getElementsByTagName('nome');
			
			for(n=0; n< nomes.length; n++ ) {
				document.getElementById("resposta").innerHTML += nomes[n].firstChild.nodeValue;
			}
		}
	};
}

