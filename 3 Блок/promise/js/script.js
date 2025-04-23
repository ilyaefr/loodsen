//#1 Простой промис
const myPromise = new Promise((resolve, reject) => {
	const success = true;

	if (success) {
		resolve('Успех!');
	} else {
		reject('Ошибка!');
	}
});

myPromise
	.then(result => {
		console.log('Результат:', result);
	})
	.catch(error => {
		console.log('Ошибка:', error);
	});

//Цепочные промисы

//#1
const promise = new Promise(resolve => {
	resolve(2);
});

promise
	.then(num => {
		console.log("Шаг 1:", num); 
		return num * 2;
	})
	.then(num => {
		console.log("Шаг 2:", num); 
		return num * 3;
	})
	.then(num => {
		console.log("Шаг 3:", num); 
	});

//#2
const fetchData = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('Данные загружены');
		}, 1000);
	});
};

const parseData = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`${data} и Обработаны`);
		}, 1000);
	});
};

fetchData()
	.then(result => {
		console.log(result); 
		return parseData(result);
	})
	.then(parsed => {
		console.log(parsed); 
	})
	.catch(error => {
		console.log('Произошла ошибка:', error);
	});

//Коллекции промисов

//#1 Promise.all
const p1 = Promise.resolve('Первый');
const p2 = new Promise(resolve => setTimeout(() => resolve('Второй'), 1000));
const p3 = Promise.resolve('Третий');

Promise.all([p1, p2, p3])
	.then(results => {
		console.log('Результаты:', results); 
	})
	.catch(error => {
		console.log("Ошибка:", error);
	});

//#2 Promise.race
const fast = new Promise(resolve => setTimeout(() => resolve('Быстрый'), 500));
const slow = new Promise(resolve => setTimeout(() => resolve('Медленный'), 1000));

Promise.race([fast, slow])
	.then(result => {
		console.log('Победитель:', result); 
	})
	.catch(error => {
    console.log('Ошибка:', error); 
  });






