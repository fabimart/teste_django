function teste()
{
/*
			c = 9;
			console.log(c.length);
			console.log(typeof(c));

			console.log(document.getElementById('descricao').innerHTML);
			
			console.log(document.getElementById('descricao'));
			*/
			
			/*
			e = document.getElementsByTagName('p');
			console.log(e);
			console.log(e[0]);
			*/
			
			/*
			elemento = document.createElement('b');
			elemento.innerHTML = 'Javascript';
			
			e = document.getElementsByTagName('p');
			console.log(e);
			e[0].appendChild(elemento);
			
			f = document.getElementById('fonte');
			console.log(f.color);
			f.color = "red";
			console.log(f.color);
			f.style.textDecoration = 'underline';
			*/


}


function metebala()
{
	elemento = document.createElement('div');
	elemento.style.backgroundColor = document.forms[0].elements[0].value;
	elemento.style.position = 'absolute';
	elemento.style.left = document.forms[0].left.value;
	elemento.style.top = document.forms[0].top.value;
	elemento.style.height = document.forms[0].height.value;
	elemento.style.width = document.forms[0].width.value;
	
	document.body.appendChild(elemento);
	
	x = function() { alert('creu'); };
	alert(x);
	
}