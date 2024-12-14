// function ValidCardNumber(cardNumber) {
//   const digits = cardNumber.split("").map(Number);
//   for (let i = digits.length - 2; i >= 0; i -= 2) {
//     digits[i] *= 2;
//     if (digits[i] > 9) {
//       digits[i] -= 9;
//     }
//   }
//   const totalSum = digits.reduce((sum, digit) => sum + digit, 0);
//   return totalSum % 10 === 0;
// }
// const cardNumber = "4137894711755904";
// if (ValidCardNumber(cardNumber)) {
//   console.log("Valid Card Number");
// } else {
//   console.log("Invalid Card Number");
// }

function generateRandomCardNumber(length) {
  let cardNumber = "";
  for (let i = 0; i < length - 1; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }
  cardNumber += "0";
  return cardNumber;
}

function calculateLuhnChecksum(cardNumber) {
  const digits = cardNumber.split("").map(Number);
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }
  const totalSum = digits.reduce((sum, digit) => sum + digit, 0);
  return (10 - (totalSum % 10)) % 10;
}

function generateValidCardNumber(length = 16) {
  let cardNumber = generateRandomCardNumber(length);
  const checksum = calculateLuhnChecksum(cardNumber);
  return cardNumber.slice(0, -1) + checksum;
}

function isValidCardNumber(cardNumber) {
  const digits = cardNumber.split("").map(Number);
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }
  const totalSum = digits.reduce((sum, digit) => sum + digit, 0);
  return totalSum % 10 === 0;
}
const generatedCardNumber = generateValidCardNumber(16);
console.log("Generated Card Number:", generatedCardNumber);
if (isValidCardNumber(generatedCardNumber)) {
  console.log("The card number is valid.");
} else {
  console.log("The card number is invalid.");
}
