let str = "урок-3-был слишком легким";
console.log(str);

str = str[0].toUpperCase() + str.slice(1);      // строка начинается с большой буквы
console.log(str);

str = str.replace(new RegExp("-", "g"), " ");   // замена - на пробел
console.log(str);

let lastIndex = str.lastIndexOf(" ");

str = str.split(" ").pop();                     // вырезать
// str = str.slice(str.lastIndexOf(' ') + 1);
str = str.replace("им", "оо");                  // заменить
console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];
let result = 0;
arr.forEach(function (i) {
  if (!isNaN(i)) {                              // проверка 
    result += (i ** 3);
  }
});
console.log(Math.sqrt(result));                 // квадратный корень из суммы кубов всех чисел в массиве

str = "   Стать чтобы джедаем javascript многому ещё научиться нужно   ";

console.log(str);

function myFunc(str) {
  if (typeof str !== "string") {
    console.log(" Не строка");
  } else {
    srt = str.trim();                           // вырезанные пробельные символы
    let sliced = str.slice(0, 50);              // проверка на то, что если строка имеет более 50 символов
    if (sliced.length < str.length) {
      return (sliced += "...");                 // возвращает ...
    }
  }
  console.log(sliced);
}
console.log(myFunc(str));

