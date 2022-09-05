
    var formBtn = document.querySelector('.valid');

    let valid = function(e){
      e.preventDefault();
      var success = document.querySelector('.success');
      var error = document.querySelector('.error');
  
      var dbname = 'david';
      var dbpass = '123';
  
        var name = document.querySelector('.name').value;
        var pass = document.querySelector('.pass').value;
  
        if (name == dbname && pass == dbpass) {
          //alert('You logged in successfully ' + name);
          success.innerText = name + ' you logged in successfully ';
        }
        else if (name == dbname && pass !== dbpass){
          //alert('Your password incorrect!! ' + name);
          success.innerText = name + ' your password is incorrect ';
        }
        else if (name !== dbname && pass == dbpass){
          //alert('Your name is not valid or incorrect!!');
          success.innerText = 'Your name is not valid or incorrect!!';
        }
        else  {
          //alert('User name or password empty or user does not exist!!');
          success.innerText = 'User name or password empty or user does not exist!!';
        }
  
  
    }
  
    formBtn.onclick = valid;
  
  