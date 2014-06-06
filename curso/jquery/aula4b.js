function el2preco(elemento)
{
	var preco;
	
	preco = elemento.text();
	preco = preco.replace("R$","");
	preco = preco.replace(".","");
	preco = preco.replace(",",".");
	preco = preco.trim();
	preco = parseFloat(preco);
	return preco;
}

function preco2str(preco)
{
	var preco, str;

	str = preco.toFixed(2);
	str = str.replace(".",",");
	return "R$ " + str;
}

$(document).ready(function(){
	$('.produto').draggable();
	$('#carrinho').droppable({
		drop: function(event, ui) {
		
			var img, div_preco, preco, st;
		
			// Identifica o preco do item
			img = ui.draggable;
			div_preco = img.next();
			preco = el2preco(div_preco);
			
			// Identifica o subtotal
			st = el2preco($("#subtotal"));
			
			// Aciciona no subtotal
			console.log(preco2str(st + preco));
			$("#subtotal").text(preco2str(st + preco));
			
			// Some com o preco
			div_preco.text("R$ 0,00");
			div_preco.hide();
		}
	});
});
			
