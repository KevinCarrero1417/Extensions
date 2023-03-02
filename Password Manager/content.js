chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.accion === "almacenarCredenciales") {
    const inputs = document.getElementsByTagName("input");

    function Pagina(user, password){
      this.user = user;
      this.password = password;
      this.getUser = function(){
        return this.user;
      }
      this.getPassword = function(){
        return this.password;
      }
      this.setUser = function(nUser){
        this.user = nUser;
      }
      this.setPassword = function(nPassword){
        this.password = nPassword;
      }
    };

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var username = input.getAttribute("name");
      var type = input.getAttribute("type");
      var id = input.getAttribute("id");
      

      if ((type === "text" || type === "email" || type === "tel") && (username.includes("user") || username.includes("name") || username.includes("username") || username.includes("text") || id.includes("email") || username.includes("usuario"))) {
        input.style.backgroundColor = "green";
        var valUser = input.value;
        
      }
      if (type == "password" && (username.includes("password") || id.includes("password") || id.includes("pass"))) {
        input.style.backgroundColor = "blue";
        var valPass = input.value;
        console.log("Campo de contraseña encontrado: " + username + " " + id + " " + type);
      }
    }
    var pag = new Pagina(valUser, valPass);
    localStorage.setItem("pagina", pag)
    console.log(localStorage.getItem("pagina"));
  }
});
