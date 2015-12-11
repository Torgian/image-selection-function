 $(document).ready(function(){
        var $htmlImagePath = "<img class='skizze-res' src='images/";
        var $selection1 = ($("input[type=radio][name='finishes']").prop ("checked", true));
        var $selection2 = ($("input[type=radio][name='colours']").prop ("checked", true));
        var $formClick = function(){
                $selection1 = $("#finish input:checked").val(); 
                $selection2 = $("#color input:checked").val();
                $htmlImagePath = $htmlImagePath + $selection1 + '-';
                $htmlImagePath = $htmlImagePath + $selection2 + ".jpg'>";
                $('#log').append($htmlImagePath);};


        var $formSelect = function(){
                 $("#finish input:radio,#color input:radio").on ("click", function(){
            	htmlClear();
                $formClick();
                });

            function htmlClear(){
        		$htmlImagePath = "<img class='skizze-res' src='images/";
        		$('#log').empty();
        	   };
        };


         if ($selection1.prop("checked", true) && $selection2.prop("checked", true)) {
            $formClick();
         };

         $formSelect();





    }); 




