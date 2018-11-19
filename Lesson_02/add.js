'use strict'

// Дополнительное первое задание

let week = ['Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
],

today = new Date();

for (let i = 0; i < week.length; i++) {
    if (i == week.length - 1 || i == week.length - 2) {
      if (i == today.getDay() - 1 || i == today.getDay() + 6) {
        document.write(week[i].italics().bold() + '<br>');
      } else {
        document.write(week[i].bold() + '<br>');
      }
    } else {
      if (i == today.getDay() - 1) {
        document.write(week[i].italics() + '<br>');
      } else {
        document.write(week[i] + '<br>');
      }
    }
  }

// Дополнительное второе задание

let arr = ['355789',
           '5639',
           '777333',
           '8112399',
           '10001014',
           '7444732',
           '321321'
          ];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
      console.log(arr[i]);
    }
  }
