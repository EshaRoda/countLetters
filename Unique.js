
function countLetters(sentence){
    var letters = {};
    sentence = sentence.replace(/\s/g, '');

    // for (var i = 0; i<sentence.length; i++){
    sentence.split("").forEach(function(letter){
        letters = increment(letters, letter);
    });
    return letters;

}

// give me bonus points for printing them out too!
function printLetters(letters){
    // for (var i = 0; i<letters.length; i++){
    // { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
    for(var letter in letters){
        console.log(letter + ": " + letters[letter]);
    };

}

function increment(letters, add){
    if (letters[add]){
        letters[add]++;
    }
    else{
        letters[add] = 1;
    }
    return letters;
}

// console.log(countLetters("lighthouse in the house"));
letters = countLetters("lighthouse in the house");
console.log(letters);
// printLetters(letters);
