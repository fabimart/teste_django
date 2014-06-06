comprados = new Array();

function String2Float(elemento)
{
	var preco = elemento.text();
	
	preco = preco.replace('R$', '');
	preco = preco.trim();
	preco = preco.replace(',', '.');
	preco = parseFloat(preco);
	
	return preco;
}

$().ready(function () {
	$('img').draggable({revert: true,});
	$('#carrinho').droppable({
		drop: function (event, ui) {
		
			$(ui.draggable).draggable({revert: false,});
		
			elemento = ui.draggable.next();
			elemento.hide();
			preco = String2Float(elemento);
			st = String2Float($('#subtotal'));
			
			prod = [ui.draggable.attr('id'), preco];
			
			comprados.push(prod);
			
			st = st + preco;
			
			$('#subtotal').text('R$ ' + st.toFixed(2).replace('.', ','));
		}
	});
	
	$('table').droppable({
		drop: function (event, ui) {
			$.each(comprados, function () {
				if (this[0] == ui.draggable.attr('id')) {
					st = String2Float($('#subtotal'));
					st = st - this[1];
					
					$('#subtotal').text('R$ ' + st.toFixed(2).replace('.', ','));					
				}
			});
		}
	});
});