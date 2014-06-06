var checkbox = false;

$(function () {

	// Radio custom
	var trueRadio = document.querySelectorAll("input[type=radio]"),
		i = 0,
		l = trueRadio.length;

	function doCheckradio(e){
		var that = e.target || e.srcElement,
			targetFakeRadio = document.querySelector("[data-id="+ that.id + "]");


		$('.fakeRadio').removeClass('checked');
		targetFakeRadio.className = that.checked ? targetFakeRadio.className + " checked" : targetFakeRadio.className.replace(" checked", "");
	}

	for (i = 0 ; i<l; i++) {
		if (!trueRadio[i].addEventListener) {
	    	trueRadio[i].attachEvent("change", doCheckradio);
		}
		else {
		    trueRadio[i].addEventListener("change", doCheckradio, false);
		}
	}

	$('.fakeRadio').click(function () {
		var id = $(this).attr('data-id');
		$('.fakeRadio').removeClass('checked');
		$(this).addClass('checked');
		$('input#'+id).prop('checked', true);
	});

	$('.radio label').click(function(){
		var id = $(this).attr('for');
		$('.fakeRadio').removeClass('checked');
		$('[data-id='+id).addClass('checked');

	});
	// Fin Radio custom

	// Checkbox Custom
	var trueCheckbox = document.querySelectorAll("input[type=checkbox]"),
		j = 0,
		k = trueCheckbox.length;

	function doCheckbox(e){
		var that = e.target || e.srcElement,
			targetFakeCheckbox = document.querySelector("[data-id="+ that.id + "]");

		targetFakeCheckbox.className = that.checked ? targetFakeCheckbox.className + " checked" : targetFakeCheckbox.className.replace(" checked", "");
	}

	for (j = 0; j<k; j++) {
	   if (!trueCheckbox[j].addEventListener) {
	    	trueCheckbox[j].attachEvent("change", doCheckbox);
		}
		else {
		    trueCheckbox[j].addEventListener("change", doCheckbox, false);
		}
	}

	$('.fakeCheckbox').click(function () {
		var id = $(this).attr('data-id');
		$(this).toggleClass('checked');

		if($('input#'+id).is(':checked')){
			$('input#'+id).prop('checked', false);
		}
		else{
			$('input#'+id).prop('checked', true);
		}
	});

	$('.checkbox label').click(function(){
		var id = $(this).attr('for');
		
		$("[data-id="+id).toggleClass('checked');
	});
});