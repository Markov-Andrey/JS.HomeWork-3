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