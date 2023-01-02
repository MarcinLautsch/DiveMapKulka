// generuje claego htmla renderuje z tablicy

function generateData() {
	const container = document.getElementById('map')

	mapa.forEach(point => {
		const isOnTheRight = point.position.left > 90
		const isOnTheLeft = point.position.left < 10

		container.innerHTML += `
		<button data-id=${point.id} id="point-${point.id}" class="point" type="button" style="left: ${
			point.position.left
		}%; top: ${point.position.top}%">+</button>
	
		<div
			data-id=${point.id}
			class="popap-container"
			style="
				left: ${point.position.left}%;   
				top: ${point.position.top - 8}%
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

		if (isOnTheRight) {
			container.querySelector(`.popap-container[data-id="${point.id}"]`).classList.add('popap-container--right')
		}

		if (isOnTheLeft) {
			container.querySelector(`.popap-container[data-id="${point.id}"]`).classList.add('popap-container--left')
		}
	})
}

function generateLegend() {
	const container = document.getElementById('legend-list')
	mapa.forEach(point => {
		container.innerHTML += `
		<li><a data-id="${point.id}" href="#point-${point.id}"> ${point.object} ${point.depth}</a></li>
	`
	})
}

generateData()
generateLegend()

// funkcja ktora wywoluje popap po kliknieciu go

function handleOnClick(event) {
	event.stopPropagation()
	const pointId = event.target.dataset.id
	const popapContainers = document.querySelectorAll(`.popap-container`)
	popapContainers.forEach(popup => popup.classList.remove('popap-container--is-visible'))

	const popapContainer = document.querySelector(`.popap-container[data-id="${pointId}"]`)
	popapContainer.classList.toggle('popap-container--is-visible')
}

// czeka na załadowanie strony oraz javascript ponizszy zapis i przypisuje EventHandler> OnClick do button

window.addEventListener('load', function () {
	const map = document.getElementById('map')

	map.addEventListener('click', () => {
		const popapContainers = document.querySelectorAll(`.popap-container`)
		popapContainers.forEach(popup => popup.classList.remove('popap-container--is-visible'))
	})

	mapa.forEach(point => {
		const button = document.querySelector(`.point[data-id="${point.id}"]`)
		button.addEventListener('click', handleOnClick.bind(point.id))

		const legend = document.querySelector(`#legend-list a[data-id="${point.id}"]`)
		legend.addEventListener('click', handleOnClick.bind(point.id))
	})

	const button = document.getElementById('poreczowki-button')
	const poreczowki = document.getElementById('poreczowki')

	button.addEventListener('click', () => {
		if (poreczowki.style.opacity === '1') {
			poreczowki.style.opacity = '0'
		} else {
			poreczowki.style.opacity = '1'
		}
	})
})

//Kamil dzwonic
