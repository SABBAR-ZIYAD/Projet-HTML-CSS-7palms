
        // Function to sign up a new user
        function signUpUser() {
            var username = document.getElementById('signUpUsername').value;
            var password = document.getElementById('signUpPassword').value;
            var signUpError = document.getElementById('signUpError');
          
            signUpError.textContent = '';
          
            // Check if username and password are provided
            if (!username || !password) {
                signUpError.textContent = 'Please enter both username and password.';
                return false;
            }
          
            // Check if username contains spaces
            for (var i = 0; i < username.length; i++) {
                if (username[i] === ' ') {
                    signUpError.textContent = 'Username must not contain spaces.';
                    return false;
                }
            }
          
            // Check if username has at least 8 characters
            if (username.length < 8 ){
                signUpError.textContent = 'Username must contain at least 8 characters.';
                return false;
            }
            
            // Check if password has at least 8 characters
            if (password.length < 8 ){
                signUpError.textContent = 'Password must contain at least 8 characters.';
                return false;
            }
            
            // Check if username already exists
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    signUpError.textContent = 'Username already exists.';
                    return false;
                }
            }
            // Add the new user to the users array
            users.push({ username: username, password: password });
            
            return false; 
        }

        // Existing function to validate login
        function validateLogin() {
            // Your existing code for login validation
        }

        // Function to clear input fields
        function clearInputs(usernameInputId, passwordInputId) {
            document.getElementById(usernameInputId).value = "";
            document.getElementById(passwordInputId).value = "";
        }

        // Function to toggle password visibility
        function togglePassword(passwordInputId) {
            var passwordInput = document.getElementById(passwordInputId);
            var checkBox = document.getElementById('show' + passwordInputId.charAt(0).toUpperCase() + passwordInputId.slice(1));

            if (checkBox.checked) {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }

