chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.accion === "almacenarCredenciales") {
    const inputs = document.getElementsByTagName("input");
    let paginas = [];
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
      }
    }
    if(localStorage.getItem("paginas") != undefined){
      paginas = JSON.parse(localStorage.getItem("paginas"));
    }    
    var pag = new Pagina(valUser, valPass)
    paginas.push(pag);
    localStorage.setItem("paginas",JSON.stringify(paginas));
    //localStorage.setItem("pagina", localStorage.getItem+";"+JSON.stringify (new Pagina(valUser, valPass)));
    //console.log(pag);
    //localStorage.setItem("pagina", JSON.stringify(pag))   
    console.log(/*JSON.parse(*/localStorage.getItem("paginas")/*)*/);
  }
});
