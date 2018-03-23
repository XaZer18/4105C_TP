document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

  var name = device.name;
  var model = device.model;
  var platform = device.platform;
  var version = device.version;
  var uuid = device.uuid;

  alert("Modèle: "+model+"\nPlateforme: "+platform+"\nVersion: "+version+"\nUUID: "+uuid);

  StatusBar.backgroundColorByHexString("#FB6400");


//   function onSuccess(contacts) {
//     alert('Found ' + contacts.length + ' contacts.');
//   };
//
// function onError(contactError) {
//     alert('onError!');
//   };

  // contacts
  // var options = new ContactFindOptions();
  // options.filter = *;
  // options.multiple = true;
  // options.desiredFields = [navigator.contacts.fieldType.id];
  // options.hasPhoneNumber = true;
  // var field = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
  // navigator.contacts.find(fields, onSuccess, onError, options);

}
