document.getElementById('loginForm').addEventListener('submit', 
    function(event){
        event.preventDefault()
  
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const emailError = document.getElementById('emailError')
      const passwordError = document.getElementById('passwordError')
      const loader = document.getElementById('loader')
  
      loader.style.display = 'flex';
  
      setTimeout(()=>{
        loader.style.display = 'none';
  
        const validEmail = "cesarewrick@gmail.com"
        const validPassword = '123456'
    
        if(email !== validEmail || password !== validPassword){
          emailError.style.display = 'block'
          passwordError.style.display = 'block'
        }
        else(
          alert("Login realizado com sucesso!")
        )}, 2000)
  })