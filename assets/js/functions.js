//4
function isPalindrome(str) {
    // Приводим строку к нижнему регистру и убираем все символы, кроме букв и цифр
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Создаем переменную для хранения перевернутой строки
    let reversedStr = '';
    
    // Переворачиваем строку
    for (let i = cleanStr.length - 1; i >= 0; i--) {
      reversedStr += cleanStr[i];
    }
    
    // Сравниваем перевернутую строку с исходной и возвращаем результат
    return cleanStr === reversedStr;
  }
  
  console.log(isPalindrome('дед')); // true
  console.log(isPalindrome('ИскАть таКси')); // true
  console.log(isPalindrome('Крот')); // false


  //5
  function extractDigits(str) {
    let digits = str.match(/\d/g); // Находим все цифры от 0 до 9 в строке
    if (digits === null) 
    {
      return NaN; // Если цифр не найдено, возвращаем NaN
    }
    return parseInt(digits.join('')); // Объединяем найденные цифры в одну строку и преобразуем в целое число
  }
  
  console.log(extractDigits('2023 год'));            // 2023
  console.log(extractDigits('1 каштан, 0.5 банана')); // 105
  console.log(extractDigits('просто строка'));           // NaN


//6
function padString(str, minLength, padChars) {
    // Если исходная строка уже достаточной длины, возвращаем её без изменений
    if (str.length >= minLength) {
      return str;
    }
    
    // Определяем количество раз, которое нужно добавить строку с добавочными символами
    const padCount = Math.ceil((minLength - str.length) / padChars.length);
    
    // Создаем строку с добавочными символами, повторяя её нужное количество раз
    const paddedStr = padChars.repeat(padCount).slice(0, minLength - str.length);
    
    // Возвращаем исходную строку, дополненную указанными символами
    return paddedStr + str;
  }
  
  console.log(padString('1', 2, '0'));      // '01'
  console.log(padString('1', 4, '0'));      // '0001'
  console.log(padString('q', 4, 'werty'));  // 'werq'
  console.log(padString('q', 4, 'we'));     // 'wweq'
  console.log(padString('qwerty', 4, '0')); // 'qwerty'

  //7
  function checkStringLength(str, maxLength) {

    if (str.length <= maxLength) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check)

  //7
  function checkString(str, maxLength) {
    return str.length <= maxLength;
  }
  console.log(checkString('проверяемая', 20)); // true
  console.log(checkString('проверяемая строка', 18)); // true
  console.log(checkString('проверяемая строка', 10)); // false