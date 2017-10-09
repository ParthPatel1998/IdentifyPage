
if ('addEventListener' in window) {
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

function togglemore() { 
    // get the form 
    var myForm = document.getElementById('more');

    // get the current value of the form's display property 
    var displaySetting = myForm.style.display;

    // also get the form button, so we can change what it says 
    var formButton = document.getElementById('togglemore');
        
    // now toggle the form and the button text, depending on current state
    if (displaySetting == 'block') { 
      // form is visible. hide it
      myForm.style.display = 'none';
      // change button class
      //formButton.className.replace = 'fa fa-plus-square';    
    } else { 
      // form is hidden. show it 
      myForm.style.display = 'block';
      // change button class
      //formButton.className.replace = 'fa fa-minus-square';
    }
  }

function toggleForm() { 
    // get the form 
    var myForm = document.getElementById('form');

    // get the current value of the form's display property 
    var displaySetting = myForm.style.display;

    // also get the form button, so we can change what it says 
    var formButton = document.getElementById('formButton');
				
    // now toggle the form and the button text, depending on current state
    if (displaySetting == 'block') { 
      // form is visible. hide it
      myForm.style.display = 'none';
      // change button class
      //formButton.className.replace = 'fa fa-plus-square';    
    } else { 
      // form is hidden. show it 
      myForm.style.display = 'block';
      // change button class
      //formButton.className.replace = 'fa fa-minus-square';
    }
  } 

//JQuery (pick one from this and toggle funtions)
$(document).ready(function(){
    $("#togglemore").click(function(){
        $("#more").toggle(300);
    });
});

$(document).ready(function(){
    $("#formButton").click(function(){
        $("#form").toggle(300);
    });
});


$(document).ready(function(){
  $("div.form").click(function(){
    $("form").slideToggle(100);
    
  });
});
