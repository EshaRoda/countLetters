console.log(countLetters("lighthouse in the house"));


function countLetters(output){
  var letters = {};
  output = output.replace(/\s/g, '');
  for (var i = 0; i < output.length; i++){
    counting(output[i], i);
  }
  return letters;

function counting(count, index){
  if (letters[count])
    letters[count].push(i);

  else
    letters[count] = [i];
 }
}