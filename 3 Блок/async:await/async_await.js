//#1
async function loadUser() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
		const user = await response.json()
		console.log(user)
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}

loadUser();

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
			resolve(`${data} и обработаны`);
		}, 1000);
	});
};

async function loadAndProcess() {
	try {
		const rawData = await fetchData(); 
		console.log(rawData); 

		const processed = await parseData(rawData); 
		console.log(processed); 
	} catch (error) {
		console.error('Ошибка:', error);
	}
}

loadAndProcess();
