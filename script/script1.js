//Task 1
function task1CycleFor () {
	for (let i = 1; i <= 50; i++) {
		if (i < 50) {
			document.write (`${i}, `)
		} else {
			document.write (`${i}. Расчет окончен! =)`)
		}
	};
};

function task1CycleWhile () {
	i = 35;
	while (i >= 8) {
		if (i > 8) {
			document.write (`${i}, `)
		} else {
			document.write (`${i}. Расчет окончен! =)`)
		}
	i--
	};
};

//Task 2
function task2CycleWhile () {
	let arrayQuotes = [
	`//Пока вы "прокручиваете" цикл, почитайте цитаты программистов:`,
	`//640 Кб должно хватить для любых задач. 
	©Bill Gates`,
	`//Программирование — это разбиение чего-то большого и 
	невозможного на что-то маленькое и вполне реальное. 
	©Jazzwant`,
	`//Работает? Не трогай. ©Любой программист`,
	`//Если вы хотите, чтобы код было легко и быстро писать — 
	делайте его удобным для чтения. 
	©Robert C. Martin`,
	`//Отладка кода — это как охота. Охота на баги. 
	©Amit Kalantri`,
	`//Основная проблема программистов состоит в том, 
	что их ошибки невозможно предугадать.
	©Seymour Cray`,
	`//Лень — естественное состояние программиста, 
	после которого он рождает хороший алгоритм.
	©Народное творчество`,
	`//Спасибо, что уделили внимание, цикл уже завершен и 
	можно переходить к следующему заданию`,
	]
	i = 89;
	while (i >= 11) {if ((i != 89) 
		&& (i != 80) && (i != 70) 
		&& (i != 60) && (i != 50) 
		&& (i != 40) && (i != 30) 
		&& (i != 20) && (i != 11)) 
		{
			document.write (`${i} <br>`)
		}
		if (i == 89) {
			document.write (`${i} ${arrayQuotes[0]} <br>`)
		}
		if (i == 80) {
			document.write (`${i} ${arrayQuotes[1]} <br>`)
		}
		if (i == 70) {
			document.write (`${i} ${arrayQuotes[2]} <br>`)
		}
		if (i == 60) {
			document.write (`${i} ${arrayQuotes[3]} <br>`)
		}
		if (i == 50) {
			document.write (`${i} ${arrayQuotes[4]} <br>`)
		}
		if (i == 40) {
			document.write (`${i} ${arrayQuotes[5]} <br>`)
		}
		if (i == 30) {
			document.write (`${i} ${arrayQuotes[6]} <br>`)
		}
		if (i == 20) {
			document.write (`${i} ${arrayQuotes[7]} <br>`)
		}
		if (i == 11) {
			document.write (`${i} ${arrayQuotes[8]} <br>`)
		}
		i--
	};
};

//Task 3
function task3Sum () {
	let sum = 0;
	for (i = 0; i <=100; i++) {
		sum = sum + i;
	};
	document.write (`Сумма чисел от 0 до 100 равна ${sum}, легко!`);
};

//Task 4
function task4Sum () {
	for (i = 1; i <= 5; i++) {	
		sum = 0;
		for (let z = 1; z <= i; z++){
			sum = sum + z;
		};
		document.write (`Сумма чисел в числе ${i} равна ${sum}<br>`);
	};
	document.write (`Готово, продолжим`);
};

//Task 5
function task5EvenNumber (){
	document.write (`<table><tr><td>Цикл "For"</td>`)
    for (i = 8; i <= 56; i++) {
		if (i % 2 == 0){
			document.write (`<td>${i}</td>`);
        };
    };
	document.write (`</tr><tr><td>Цикл "While"</td>`)
    i = 8;
    while (i <= 56) {
		if (i % 2 == 0){
			document.write (`<td>${i}</td>`);
		};
		i++
    };
	document.write (`</tr></table>`)
};

//Task 6
function task6MultiplicationTable (){
	i = 2,	x = 2;
	document.write (`Таблица умножения<br>
	Работа с тэгами таблицы. В связи со спецификой таблиц в HTML таблица формируется слева направо,<br>
	а уже потом сверху вниз<br>
	<table><tr>`)
    while (x <= 10) {
    	while (i <= 10) {
    		document.write (`<td>${i} * ${x} = ${i*x}</td>`);
    		i++;
    	};
		document.write (`</tr><tr>`)
    	i = 2;
		x++
    };
	document.write (`</tr></table>`)
};

//Task 7
//Task 7
function task7DivideNumber (){
	let n = 1000;
	for (num = 0; n >= 50; num++) {
		n = n / 2;
	};
	document.write (`Решение через цикл, 
		с проверкой переменной n>=50<br>
		<br>Итоговое число: ${n};
		<br>Количество итераций: ${num}`);
};

//Task 8
function task8SumNumber () {
	i = 50, x = 0;
	num = 0;
	while (true) { //переделать в бесконечный цикл, а для i добавить условие
        i = +prompt ('Вводите числа, когда надоест - '+ 
            'оставьте пустую строку или поставьте 0');
        if((i != '') || (i != 0)) {
            if (Number.isNaN(i)) {
                alert ('Вводите числа, а не строки. Попробуем ещё');
            } else {
                x++;
                num = num + i;
                document.write (`${i}, `);
            };
        } else { //если ввели 0 или строку выходим из бесконечного цикла
            break
        };
    }; 
	document.write (`. Я не виноват, вы сами ввели такие числа!<br>
	Решено через бесконечный цикл "while (true)"" с ручной остановкой при проверке "break".<br>
	Решение предоставил Влад Маркотин. Спасибо БОЛЬШОЕ ему!<br><br>`);
	if (x > 0) {
		document.write (`Сумма = ${num}<br>Среднее арифметическое из 
		${x} введеных чисел = ${num / x}`)
	} else {
		document.write (`Нет введенных чисел. Перезагрузите страницу.`)
	};
};

//Task 9
function task9Split (){
	let arrayNumber;
	i = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
	arrayNumber = i.split (' ');
	document.write (`Создан массив "arrayNumber" через метод ".split" 
	на основе символа "пробел":<br>
	"${arrayNumber}"
	<br>Далее работает 2 цикла c проверкой по созданному массиву.<br>
	Сравниваем каждое значение Х массива со следующим Х+1, находим больше или меньше,<br>
	в случае выполнения условия мы задаем переменную как наше искомое значение,<br>
	иначе ничего не делаем и "прогоняем" сл. итерацию;
	<br><br>`);
	for (x=0, num = null; arrayNumber[x] < arrayNumber.length; x++) {
		if (arrayNumber[x] > arrayNumber[x + 1]) {
			num = arrayNumber[x];
		};
	};
	document.write (`Самое большое число - ${arrayNumber[x]}<br>`);
	for (x=0, num = null; arrayNumber[x] < arrayNumber.length; x++) {
		if (arrayNumber[x] < arrayNumber[x + 1]) {
			num = arrayNumber[x];
		};
	};
	document.write (`Самое маленькое число - ${arrayNumber[num]}<br>`);
};

//Task 10
function task10Math (){
	n = '1000';
	x = 0;
	num = 0;
	i = n.split ('');
	document.write (`
		Создан массив "i" через метод ".split" посимвольно, 
		далее работаем с массивом:
		<ul>
		<li>a. выводим массив;</li>
		<li>b. узнаем длину массива с помощью метода ".length";</li>
		<li>c. циклом считаем сумму чисел в массиве 
		(обратите внимание на перевод значений в число с помощью унарного +);</li>
		<li>d. меняем порядок с помощью метода ".reversed"</li>
		</ul><br><br>
	`);
	for (x = 0; x < i.length; x++) {
		i[x] = +i[x];
		num = num + i[x];
	};
		document.write (`<ul><li>a. Массив чисел - ${i}</li>`);
		document.write (`<li>b. Цифр в числе - ${i.length}</li>`);
		document.write (`<li>с. Сумма цифр числа - ${num}</li>`);
		document.write (`<li>d. Обратный порядок - ${i.reverse()}</li></ul>`);
};
