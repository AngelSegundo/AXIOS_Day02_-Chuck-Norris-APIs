

axios
    .get('https://api.chucknorris.io/jokes/categories')
    .then(response => {
        const categBox = document.createElement('ul')
        document.querySelector('body').appendChild(categBox)
        const category = response.data
        category.forEach(categ => {
            let categName = document.createElement('li')
            let categData = categ
            categName.innerHTML = `${categData}`
            categBox.appendChild(categName)
            categName.addEventListener('click', () => {
                let jokeBox = document.createElement('div')
                document.querySelector('body').appendChild(jokeBox)
                axios
                    .get(`https://api.chucknorris.io/jokes/random?category=${categData}`)
                    .then(response => {
                        const joke = response.data.value
                        jokeBox.innerHTML = `
                        <hr>
                        <h2>Category:< ${categData}: <h2>${joke}</h2>`
                    })
            })
        });
    })
