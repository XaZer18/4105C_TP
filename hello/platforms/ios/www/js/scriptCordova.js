document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

  var model = device.model;
  var platform = device.platform;
  var version = device.version;
  var uuid = device.uuid;

  alert("Modèle: "+model+"\nPlateforme: "+platform+"\nVersion: "+version+"\nUUID: "+uuid);

  StatusBar.show();
  StatusBar.backgroundColorByHexString("#FB6400");

}
