onEvent("button2", "click", function( ) {
  setScreen("screen2");
});


onEvent("button3", "click", function( ) {
  var temp = {};
  temp.Name = getText("text_input");
  temp.Phone = getText("text_input");
  temp.Carmodel = getText("text_input");
  createRecord("Data of sign up", temp);
  setScreen("screen4");
  
  
});

onEvent("button1", "click", function( ) {
  setScreen("screen3");
});

onEvent("image3", "click", function( ) {
  open("https://www.google.com/maps");
});

onEvent("button5", "click", function( ) {
  setScreen("screen4");
});



onEvent("button7", "click", function( ) {
  setScreen("screen4");
});

onEvent("button8", "click", function( ) {
  setScreen("screen1");
});

onEvent("button9", "click", function( ) {
  open("https://www.aqi.in/dashboard/india/odisha");
});

onEvent("button10", "click", function( ) {
  open("https://docs.google.com/forms/d/e/1FAIpQLScrnQhe4gZgAtnVmoyMnWI_Qf9qxPBOvAzg6JdeM72a808MTQ/viewform");
});


onEvent("button13", "click", function( ) {
  setScreen("screen1");
});

onEvent("button14", "click", function( ) {
  setScreen("screen1");
});

onEvent("button12", "click", function( ) {
  setScreen("screen4");
});

onEvent("image8", "click", function( ) {
  setScreen("screen7");
});

onEvent("button15", "click", function( ) {
  setScreen("screen4");
});

onEvent("button16", "click", function( ) {
  setScreen("screen5");
});

onEvent("button17", "click", function( ) {
  setScreen("screen6");
});

onEvent("image9", "click", function( ) {
  setScreen("screen4");
});

onEvent("image10", "click", function( ) {
  setScreen("screen7");
});

onEvent("image11", "click", function( ) {
  setScreen("screen7");
});

