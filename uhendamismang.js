


$('document').ready(function() {

	var valitud_1 = 0;
	var valitud_2 = 0;
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
		var temp = teine - kastide_arv;
		if(temp == esimene) {
			return true;
		}
		else {
			return false;
		}
	}



	$('.kastvale').click(function() {
		if(valiktehtud == 0) {  //esimene kast mis valiti?
			valitud_1 = parseInt($(this).attr('id'));
			valitud_1_ID = '#' + valitud_1;

			if( jQuery.inArray(valitud_1, vasak_pool) > -1 ) { //vasak pool?
				pool = 'vasak';
				$(this).removeClass('kastvale').addClass('kastvalitud');
				valiktehtud = 1;
			}

			else { //parem pool?
				pool = 'parem';
				$(this).removeClass('kastvale').addClass('kastvalitud');
				valiktehtud = 1;
			}
			
			
		}
		else if(valiktehtud !== 0) { //Teine kast mis valiti?
			valitud_2 = parseInt($(this).attr('id'));
			valitud_2_ID = '#' + valitud_2;

			if (jQuery.inArray(valitud_2, vasak_pool) > -1) { //vasak pool?
				uus_pool = 'vasak';

				if(uus_pool == pool) { //sama eelmisega?
				 $(valitud_1_ID).removeClass('kastvalitud').addClass('kastvale');
				 $(valitud_2_ID).removeClass('kastvale').addClass('kastvalitud');
				 valiktehtud = 1;
				 valitud_1 = parseInt($(this).attr('id'));
				 valitud_1_ID = '#' + valitud_1;
				 valitud_1_ID = valitud_2_ID;
				}

				else { //ei ole sama eelmise poolega
					var oige = Matchup(valitud_2, valitud_1);
					if(oige == true) { //Sobivad?
						$(valitud_2_ID).removeClass('kastvalitud').addClass('kastoige');
				 		$(valitud_1_ID).removeClass('kastvale').addClass('kastoige');
				 		valiktehtud = 0;
					}

					else { //Ei sobi?
						$(valitud_1_ID).removeClass('kastvalitud').addClass('kastvale');
						valiktehtud = 0;
					}

				}
			}


			else { //parem pool?
				uus_pool = 'parem';

				if(uus_pool == pool) { //sama eelmisega?
					$(valitud_1_ID).removeClass('kastvalitud').addClass('kastvale');
					$(valitud_2_ID).removeClass('kastvale').addClass('kastvalitud');
					valiktehtud = 1;
					valitud_1 = parseInt($(this).attr('id'));
					valitud_1_ID = '#' + valitud_1;
					valitud_1_ID = valitud_2_ID;
				}

				else { //ei ole sama eelmsie poolega
					var oige = Matchup(valitud_1, valitud_2);
					if(oige == true) { //Sobivad?
						$(valitud_1_ID).removeClass('kastvalitud').addClass('kastoige');
				 		$(valitud_2_ID).removeClass('kastvale').addClass('kastoige');
				 		valiktehtud = 0;
					}

					else { //Ei sobi?
						$(valitud_1_ID).removeClass('kastvalitud').addClass('kastvale');
						valiktehtud = 0;
					}

				}

			}
						
		}
	});// end function click


	$('#uuesti').click(function() {
		$('.kastoige').each(function(){
			$(this).removeClass('kastvalitud');
			$(this).removeClass('kastoige').addClass('kastvale');
		});//end function

		$('.kastvalitud').each(function(){
			$(this).removeClass('kastvalitud').addClass('kastvale');
			valiktehtud = 0;
		});//end function
	});	//end restart


}); //end function main