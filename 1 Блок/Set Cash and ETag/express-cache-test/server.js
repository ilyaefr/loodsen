const express = require('express'); 
const app = express(); 

app.get('/cache-control', (req, res) => {
	const etag = '12345'; // Фиксированное значение для теста

	// Если клиент отправил If-None-Match и он совпадает с нашим ETag
	if (req.headers['if-none-match'] === etag) {
		return res.status(304).end(); // Отправляем 304 Not Modified
	}

	res.set({
		'Cache-Control': 'public, max-age=10',
		'ETag': etag
	});

	res.json({
		message: 'Cached response',
		time: new Date().toISOString()
	});
});

app.listen(8080, () => console.log('Server running on http://localhost:8080'));