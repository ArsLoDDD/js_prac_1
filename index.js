let countTry = 0;

while (true) {
  const inputNumber = prompt("Enter a number from 1 to 10");
  countTry++;
  if (isNaN(inputNumber)) {
    alert('Wrong type')
  } else{
      if (inputNumber === SECRET_NUMBER && inputNumber <= 10 && inputNumber >= 1) {
      alert("Congratulations");
      alert("You number of try " + countTry);
      break;
    } else if (inputNumber > SECRET_NUMBER) {
      alert("Please enter a number less than");
    } else if (inputNumber < SECRET_NUMBER) {
      alert("Please enter a number greater than");
    }
  }
}
