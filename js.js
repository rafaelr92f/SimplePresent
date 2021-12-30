let button = document.querySelector("button");
button.addEventListener("click", start);
let displayError = document.querySelector("#error");

const numbers = /\d/gi;
const symbols = /\W/gi;
const spaces = /\s/gi;
const vowels = ["a", "e", "i", "o", "u"];

function start() {
  const verb = document.querySelector("input").value.toLowerCase();
  //console.log(verb)
  const span = document.querySelectorAll("span");

  if (verb.match(numbers) || verb.match(symbols) || verb.match(spaces)) {
    displayError.style.display = "block";
    return;
  } else {
    //console.log('ok')
    if (verb == "have") {
      span[0].innerHTML = "Have"; // I
      span[1].innerHTML = "Have"; // You
      span[2].innerHTML = "Has"; // He
      span[3].innerHTML = "Has"; // She
      span[4].innerHTML = "Has"; // It
      span[5].innerHTML = "Have"; // We
      span[6].innerHTML = "Have"; // You
      span[7].innerHTML = "Have"; // They
    } else if (verb == "go") {
      span[0].innerHTML = verb; // I
      span[1].innerHTML = verb; // You
      span[2].innerHTML = verb + "es"; // He
      span[3].innerHTML = verb + "es"; // She
      span[4].innerHTML = verb + "es"; // It
      span[5].innerHTML = verb; // We
      span[6].innerHTML = verb; // You
      span[7].innerHTML = verb; // They
    } else if (verb == "go") {
      span[0].innerHTML = verb; // I
      span[1].innerHTML = verb; // You
      span[2].innerHTML = verb + "es"; // He
      span[3].innerHTML = verb + "es"; // She
      span[4].innerHTML = verb + "es"; // It
      span[5].innerHTML = verb; // We
      span[6].innerHTML = verb; // You
      span[7].innerHTML = verb; // They
    } else if (verb == "be") {
      span[0].innerHTML = "Am"; // I
      span[1].innerHTML = "Are"; // You
      span[2].innerHTML = "Is"; // He
      span[3].innerHTML = "Is"; // She
      span[4].innerHTML = "Is"; // It
      span[5].innerHTML = "Are"; // We
      span[6].innerHTML = "Are"; // You
      span[7].innerHTML = "Are"; // They
    } else if (verb != "") {
      verb.toString();
      let index = verb.length;

      if (
        (verb[index - 1] == "h" && verb[index - 2] == "s") ||
        (verb[index - 1] == "h" && verb[index - 2] == "c") ||
        verb[index - 1] == "x" ||
        (verb[index - 1] == "s" && verb[index - 2] == "s")
      ) {
        span[0].innerHTML = verb;
        span[1].innerHTML = verb;
        span[2].innerHTML = verb + "es";
        span[3].innerHTML = verb + "es";
        span[4].innerHTML = verb + "es";
        span[5].innerHTML = verb;
        span[6].innerHTML = verb;
        span[7].innerHTML = verb;
      } else if (verb[index - 1].match("y")) {
        verb.toString();
        let lastLetter = verb[index - 2];

        for (let i = 0; i < vowels.length; i++) {
          if (lastLetter.match(vowels[i])) {
            span[0].innerHTML = verb; // I
            span[1].innerHTML = verb; // You
            span[2].innerHTML = verb + "s"; // He
            span[3].innerHTML = verb + "s"; // She
            span[4].innerHTML = verb + "s"; // It
            span[5].innerHTML = verb; // We
            span[6].innerHTML = verb; // You
            span[7].innerHTML = verb; // They
          } else if (
            lastLetter != "a" &&
            lastLetter != "e" &&
            lastLetter != "i" &&
            lastLetter != "o" &&
            lastLetter != "u"
          ) {
            span[0].innerHTML = verb; // I
            span[1].innerHTML = verb; // You
            span[2].innerHTML = verb.substr(0, verb.length - 1) + "ies"; // He
            span[3].innerHTML = verb.substr(0, verb.length - 1) + "ies"; // She
            span[4].innerHTML = verb.substr(0, verb.length - 1) + "ies"; // It
            span[5].innerHTML = verb; // We
            span[6].innerHTML = verb; // You
            span[7].innerHTML = verb; // They
          }
        }
      } else {
        span[0].innerHTML = verb; // I
        span[1].innerHTML = verb; // You
        span[2].innerHTML = verb + "s"; // He
        span[3].innerHTML = verb + "s"; // She
        span[4].innerHTML = verb + "s"; // It
        span[5].innerHTML = verb; // We
        span[6].innerHTML = verb; // You
        span[7].innerHTML = verb; // They
      }
    }
  }
}
