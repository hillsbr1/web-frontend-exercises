
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var specialSpeak = function(name) {
    var firstLetter = name.charAt(0);

    if (firstLetter == "J" || firstLetter == "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

  names.map(a => {specialSpeak(a)});

  for (var i=0; i<names.length; i++) {
    var firstLetter = names[i].charAt(0);

    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();