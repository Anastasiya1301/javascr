const messageText = "I study JavaScript";
console.log(messageText.length);//довжина рядка

// const letter = messageText.at(-2);
// console.log(letter);//якщо плюсове з початку фрази, якщо - то з кінця

// const text = prompt("Введіть інформацію: ");
// console.log(text);

// const normalizeText = text.toUpperCase();
// console.log(normalizeText);

// const lowerCaseText = text.toLowerCase();
// console.log(lowerCaseText);

// const includeText = messageText.includes("JavaScript", -1);
// console.log(includeText);

// const letterIndex = messageText.indexOf("J", -1);//на якому індексі буква, якщо елемента немає то показує -1
// console.log(letterIndex);

// const messageTextStart = messageText.startsWith("study", 2);//чи починається фраза з таким словом, якщо кома та фндекс з якого починати індексу шукає та вказує правда чи не правда
// console.log(messageTextStart);

// const messageTextEnd = messageText.endsWith("Script");//перевіряє на яке останнє слово,букву закінчується фраза
// console.log(messageTextEnd);

// const text = "  JavaScript  ";
// const newText = text.trim(); //працює на початку та кінця слова, прибирає пробіли
// console.log(newText); 
// console.log(text);

const textPadStart = messageText.padStart(25, "!");//ставить сиволи на початку
console.log(textPadStart);

const textPadEnd = messageText.padEnd(25, "!");//ставить символи на кінці
console.log(textPadEnd);