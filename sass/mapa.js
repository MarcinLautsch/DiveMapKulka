const mapa = [
	{
		image: './src/lodka.jpg',
		object: 'Platforma',
		depth: '6m',
		timeFromStart: '6min',
		danger: 'brak',
	},
	{
		image: './src/ramie.jpg',
		object: 'WÓZKI KOPALNIANE 2 SZT',
		depth: '8m',
		timeFromStart: '12min',
		danger: 'brak',
	},
]


//  to nam nie bedzie potzrebne dodawanie

// const inputImage = document.getElementById('addImage').value
// const inputObject = document.getElementById('addObject').value
// const inputDepth = document.getElementById('addDepth').value
// const inputTimeFromStart = document.getElementById('addTimeFromStart').value
// const inputdanger = document.getElementById('addDanger').value

// const book = {
// 	image: addImage,
// 	object: addObject,
// 	depth: addDepth,
// 	timeFromStart: addTimeFromStart,
// 	danger: addDanger,
// }


function showObject(objectConteiner, object) {
objectConteiner.innerHtml += `
<div class='info'>
                    <img class="img-info" src=${map.image}>
                    <p class="diveInfo">
                        <span>
                            <ol class="infoPlace">
                                <li>Obiekt:<span> Łódź</span></li>
                                <li>Głębokość: <span> 26m</span></li>
                                <li>Czas z punktu Start:<span> 12min</span></li>
                                <li>Zagrożenia: <span> Brak</span></li>
                            </ol>
                        </span>
                    </p>
                </div>
`;
}
