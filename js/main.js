window.onload = function() {
  document.querySelector('#settings').addEventListener("click", function(){
    chrome.app.window.create(
      'settings.html',
      {
        frame: "none",
        id: 'settingsWindow',
        resizable: false,
        bounds: {width: 400, height: 400}
      }
    );
  });
  document.querySelector('#close_icon').addEventListener("click", function(){
    window.close();
  });
};
