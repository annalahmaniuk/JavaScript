(function() {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();

      if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
      } else {
          helloSpeaker.speak(names[i]);
      }
  }
})();

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Функція, яка рахує кількість голосних літер у слові
function countVowels(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
          count++;
      }
  }
  return count;
}

// Функція, що виводить привітання в залежності від кількості голосних літер
function greetBasedOnVowels(name) {
  var numVowels = countVowels(name);
  if (numVowels % 2 === 0) {
      console.log("Goodbye " + name);
  } else {
      console.log("Hello " + name);
  }
}

// Перевірка для кожного імені в масиві
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  greetBasedOnVowels(names[i]);
}
