function loud()
{
//	debuga();

	console.log(typeof(p));
	console.log(typeof(p.produtos));

	filhos = document.getElementById('cabecalho').childNodes;
	
	// As posicoes pares sao TEXTNODE, as impares sao ELEMENTNODE
	for ( i = 1; i < filhos.length; i+=2 ) {
		netos = filhos[i].childNodes;
		
		for ( j = 1; j < netos.length; j+=2 ) {
			console.log("cabecalho " + j + "'" + netos[j].innerHTML + "'");
		}
		
	}
	
	/*
	botao = document.createElement("input");
	for ( x in botao )
	{
		console.log(x);
	}
*/	
	
	tbode = document.getElementById("produtos");
		
//	console.profile("nhanha");
	console.time("nhanhe");
	for ( i=0; i < p.produtos.length; i++ )
	{
		produto = p.produtos[i];
		linha = document.createElement("tr");
		coluna = document.createElement("td");
		coluna.innerHTML = produto.nome;
		linha.appendChild(coluna);
		coluna = document.createElement("td");
		coluna.innerHTML = produto.valor;
		linha.appendChild(coluna);
		coluna = document.createElement("td");
		botao = document.createElement("input");
		botao.type = "button";
		botao.value = "apagar";
		botao.onclick = function() { remove(this); };
		coluna.appendChild(botao);
		linha.appendChild(coluna);
		tbode.appendChild(linha);
	}
	
	console.timeEnd("nhanhe");
//	console.profileEnd("nhanha");
}

function remove(elemento)
{
	console.log("vou remover " + elemento);
	document.getElementById('produtos').removeChild(elemento.parentNode.parentNode);
}

function debuga()
{
	for ( x in navigator ) {
		console.log(x + " : " + navigator[x]);
	}
}