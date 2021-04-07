function loadRepos() {
	const userName = document.getElementById(`username`).value;

	const url = `http://api.github.com/users/${userName}/repos`;

	// const requestPromis = fetch(url);

	// console.log(requestPromis);

	// requestPromis.then(handleResponse);

	// function handleResponse(response) {
	// 	console.log(response);
	// 	const dataPromise = response.json();
	// 	dataPromise.then(handleData);
	// }

	// function handleData(data) {
	// 	console.log(data);
	// }


	fetch(url)
		.then(response => {
			if (response.status == 404) {
				throw new Error('User not found');
			}
			return response.json();
		})
		.then(data => {
			const ulElement = document.getElementById('repos');
			ulElement.innerHTML = '';
			data.forEach(r => {
				const liElement = document.createElement('li');
				liElement.textContent = r.full_name;
				ulElement.appendChild(liElement);
			});
		})
		.catch(error => {
			console.log(error);
		})

		// const [reposResponse, orgsResponse, projectResponse] = await Promise.all([
		// 	fetch(url1),
		// 	fetch(url2),
		// 	fetch(url3)
		// ])

		try {
			const response = await fetch(url);
			if (response.status == 404) {
				throw new Error('asdasdasd')
			}

			const data = await response.json();
			const ulElement = document.getElementById('repos');
			ulElement.innerHTML = '';
			data.forEach(r => {
				const liElement = document.createElement('li');
				liElement.textContent = r.full_name;
				ulElement.appendChild(liElement);
			});
		} catch (error) {
			console.log(error);
		}
}