


$('document').ready(function() {

	var valitud = 0;
	var muuda = 0;
	var valiktehtud = 0;
	var punktid = 0;
	var vasak_pool = [1, 2, 3, 4, 5];
	var parem_pool = [6, 7, 8, 9, 10];
	var pool = 0;
	var uus_pool = 0;

	function Matchup(id1, id2) {
		var esimene = parseInt(id1);
		var teine = parseInt(id2);
		var kastide_arv = 0;
		$('.kastvasak').each(function(){
			kastide_arv++;
		});
		if(teine - kastide_arv == esimene) {
			return true;
		}
		else {
			return false;
		}
	}

	$('.kastvale').click(function() {
		if(valiktehtud == 0) {
			valitud = parseInt($(this).attr('id'));
			if( jQuery.inArray(valitud, vasak_pool) > -1 ) {
				pool = 'vasak';
			}
			else {
				pool = 'parem';
			}
			$(this).removeClass('kastvale').addClass('kastvalitud');
			valiktehtud++;
			
		}
		else {
			$(this).removeClass('kastvalitud').addClass('kastvale');
		}
	});// end function Vasak click

	$('.kastvale').click(function() {
		valitud = parseInt($(this).attr('id'));
		if( jQuery.inArray(valitud, vasak_pool) > -1 ) {
				uus_pool = 'vasak';
			}
			else {
				uus_pool = 'parem';
			}
		if (uus_pool == pool) {
			$(this).removeClass('kastvalitud').addClass('kastvale');
		}

		else if (valitud == $(this).attr('id')) {
			muuda = '#' + valitud
			$(muuda).removeClass('kastvale').addClass('kastoige');
			$(this).removeClass('kastvale').addClass('kastoige');
			punktid++;
			if (punktid == 6) {
				alert("Ülesanne sooritatud, Palju õnne!");
				punktid = 0;
				};
			valiktehtud = 0;
			valitud = 0;
			
		}
		else {
			muuda = '#' + valitud
			alert("Valisid valesti!");
			$(muuda).removeClass('kastvalitud').addClass('kastvale');
			valitud = 0;
			valiktehtud = 0;
		}
	});	//End function Kastparem click


	$('#uuesti').click(function() {
		$('.kastoige').each(function(){
			$(this).removeClass('kastvalitud');
			$(this).removeClass('kastoige').addClass('kastvale');
		});//end function

		$('.kastvalitud').each(function(){
			$(this).removeClass('kastvalitud').addClass('kastvale');
		});//end function
	});	//end restart


}); //end function main