document.getElementById('registration').addEventListener('submit',
     function(event){
         event.preventDefault()

        const nameError = document.getElementById('nameError')
        const name = document.getElementById('name').value 
        const date = document.getElementById('date').value 
        const email = document.getElementById('email').value 
        const password = document.getElementById('password').value 
        const passwordError = document.getElementById('passwordError')
        const confPassword = document.getElementById('confPassword').value 

        nameError.style.display = 'none';
        passwordError.style.display = 'none';
        


            if(name.length < 3){
                nameError.style.display = 'block'

            } 
            
            if(password !== confPassword){
                passwordError.style.display = 'block'

            } 
            
            else{
                alert("Cadastro realizado com sucesso!")
                location.reload()

            }
        

})