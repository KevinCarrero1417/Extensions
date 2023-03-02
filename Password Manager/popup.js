document.addEventListener('DOMContentLoaded', function () {
  var cred = document.getElementById('AlmCred');
  cred.addEventListener('click', function () { 
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { accion: "almacenarCredenciales" });
    });
  });
});
