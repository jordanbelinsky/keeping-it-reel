$(document).ready(function(){
	$('#series').on('change', function(){
        var theVal = $(this).val();
        $('.series').addClass('hidden');
    	$('.series#series' + theVal).removeClass('hidden');
    });
});