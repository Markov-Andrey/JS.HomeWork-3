//Task 1
function task1CycleFor () {
	for (let i = 1; i <= 50; i++) {
		if (i < 50) {
			document.write (`${i}, `)
		}
		if (i == 50) {
			document.write (`${i}. Расчет окончен! =)`)
		}
	};
};

function task1CycleWhile () {
	i = 35;
	while (i >= 8) {
		if (i > 8) {
			document.write (`${i}, `)
		}
		if (i == 8) {
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
	while (i >= 11) {
		if ((i != 89) && (i != 80)) {
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
	i = 0;
	while (i <= 100) {
		sum = sum + i;
		i++
	};
	document.write (`Сумма чисел от 0 до 100 равна ${sum}, легко!`);
};