function loud()
{
	formi = document.createElement("form");

	for ( i = 0; i < x.dados.length; i++ )
	{
		pe = document.createElement("p");		
		inputi = document.createElement("input");
		inputi.type = "checkbox";
		inputi.name = "curso";
		pe.appendChild(inputi)
		pe.innerHTML += x.dados[i].nome + " (" + x.dados[i].ch + ")";
		formi.appendChild(pe)
	}
	
	document.body.appendChild(formi);	
}

function debuga()
{
	alert(getPrototypeOf(x));

	alert(x.nome);
	
	alert(x);
	
	alert (x.creu);
	
	alert(typeof(x));
	
	alert (x.length);
}