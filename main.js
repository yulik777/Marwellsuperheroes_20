
        let marvelJson = `[{
            "image": "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/batman-comic-i4516.jpg",
            "name": "Batman",
            "universe" : "DC Comics" ,
            "occupation": "crime fighter, philanthropist, billionaire",
            "superpowers": "intelligence, vast knowledge"
        }, {
            "image": "https://upload.wikimedia.org/wikipedia/ru/thumb/6/68/Superman01.jpg/227px-Superman01.jpg",
            "name": "Superman",
            "universe": "DC Comics" ,
            "occupation": "fighter for justice",
            "superpowers": "impenetrability, super strength, flight, self-healing, super vision and super hearing"
        }, {
            "image": "https://i.pinimg.com/550x/f2/ed/94/f2ed941ca2afa71eb6798d10e26b9cb4.jpg",
            "name": "Halk",
            "universe" : "Marvel Comics" ,
            "occupation": "superhero, justice fighter, biochemist",
            "superpowers": "superhuman strength and speed, stamina, flight",
            "rating": ""
        }]`;

        document.addEventListener("DOMContentLoaded", function () {
            let marvels = JSON.parse(marvelJson);
            console.log(marvels);

            let marvelcards = " ";

            for (let marvel of marvels) {
                marvelcards += 
                `<div class='superheroes'>
                    <img src="${marvel.image}" alt="hero">
                    <h2>${marvel.name}</h2>
                    <p>${marvel.universe}</p>
                    <p> Occupation: ${marvel.occupation}</p>
                    <p> Superwowers: ${marvel.superpowers}</p>
                    <input type="text" class="rating" ${marvel.rating} placeholder="Рейтинг">
                   <button class="button"> Присвоить рейтинг</button>
        </div> `;
            }
            document.getElementById("marvels_cards").innerHTML = marvelcards;      
        })

        document.addEventListener("click", function (event) {
            if (event.target.classList.contains('button')) { 
                const parent = event.target.parentNode;
                const input = parent.querySelector('.rating');
                const errors = parent.querySelectorAll('.error');
                const ratings = parent.querySelectorAll('.raitRes');
                for (let i = 0; i < errors.length; i++) {
                    errors[i].remove();
                }
                for (let i = 0; i < ratings.length; i++) {
                    ratings[i].remove();
                }
            
                if (input.value > 0) {
                    const p = document.createElement('p');
                    p.className = 'raitRes';
                    p.textContent = `рейтинг героя ${input.value}`;
                    parent.appendChild(p);
                } else {
                    
                    const err = document.createElement('div');
                    err.className = 'error';
                    err.style.color = 'red';
                    err.innerHTML = 'Нет оценки';
                    parent.insertBefore(err, input);
                }
            }
        })
