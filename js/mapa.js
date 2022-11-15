// generuje claego htmla renderuje z tablicy

function generateData() {
	const container = document.getElementById('map')

	mapa.forEach(point => {
		container.innerHTML += `
		<button id="button-${point.id}" class="point" type="button" style="left: ${point.position.left}%; top: ${
			point.position.top
		}%">+</button>
	
		<div
			id="popap-container-button-${point.id}"
			class="popap-container"
			style="
				left: ${point.position.left}%;   
				top: ${point.position.top - 7}%
			"
		>
			<div class="popap-container__shadow"></div>
			<div class="popap-container__content">
				<div class='info'>
					<img class="img-info" src="${point.image}">
					<p class="diveInfo">
						<span>
							<ol class="infoPlace">
								<li>Obiekt:<span> ${point.object}</span></li>
								<li>Głębokość: <span> ${point.depth}</span></li>
								<li>Czas z punktu Start:<span> ${point.timeFromStart}</span></li>
								<li>Zagrożenia: <span> ${point.danger}</span></li>
							</ol>
						</span>
					</p>
				</div>
			</div>
		</div>
		`
	})
}

function generateLegend() {
	const container = document.getElementById('legend-list')
	mapa.forEach(point => {
		container.innerHTML += `
		<li id='list-element-${point.id}'><a class="btn-photo"><span>${point.object} </span> ${point.depth}</li></a>
	`
	})
}

generateData()
generateLegend()

// funkcja ktora wywoluje popap po kliknieciu go

function handleOnClick(event) {
	const eventTargetId = event.target.id
	const popapContainer = document.getElementById(`popap-container-${eventTargetId}`)
	popapContainer.classList.toggle('popap-container--is-visible')
}

// czeka na załadowanie strony oraz javascript ponizszy zapis i przypisuje EventHandler> OnClick do button

window.addEventListener('load', function () {
	mapa.forEach(point => {
		const button = document.getElementById(`button-${point.id}`)
		button.addEventListener('click', handleOnClick)
	})
})
