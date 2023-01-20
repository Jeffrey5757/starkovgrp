class Ymap {
	constructor(map) {
		this.details = {
			map: map,
			markers: map.querySelectorAll('.markers'),
			zoom: 10,
			marker: {
				icon: map.dataset.markerImg,
				height: map.dataset.markerHeight,
				width: map.dataset.markerWidth
			}
		}

		this.init();
	}

	init() {
		this.ymap = new ymaps.Map(this.details.map.id, {
			center: [this.details.markers[0].dataset.lat, this.details.markers[0].dataset.lng],
			zoom: this.details.zoom,
			controls: []
		})
		this.objectManager = new ymaps.ObjectManager({
			clusterize: true
		});
	
		this.objectManager.objects.options.set({
			iconLayout: 'default#image',
			iconImageHref: this.details.marker.icon,
			iconImageSize: [this.details.marker.width, this.details.marker.height],
			iconImageOffset: [(this.details.marker.width / 2 * -1), (this.details.marker.height * -1)],
			openBalloonOnClick: false
		});
		this.objectManager.clusters.options.set({
			preset: 'islands#invertedRedClusterIcons',
			openBalloonOnClick: false
		});
	
		this.ymap.geoObjects.add(this.objectManager);

		this.addMarkers();
	}

	addMarkers() {
		this.objectManager.removeAll();

		let myPlacemarks = {
			type: "FeatureCollection",
			features: []
		};
		this.details.markers.forEach((coordinate, index) => {
			myPlacemarks.features.push({
				type: "Feature",
				id: index,
				geometry: {
					type: "Point",
					coordinates: [parseFloat(coordinate.dataset.lat), parseFloat(coordinate.dataset.lng)]
				}
			});
		})

		this.objectManager.add(myPlacemarks);

		this.centerMap();
		this.ymap.container.fitToViewport();
	}

	centerMap() {
		this.ymap.setBounds(this.ymap.geoObjects.getBounds());
		if( this.details.markers.length == 1 ) this.ymap.setZoom( 17 );
	}
}


const maps = document.querySelectorAll('.map');
if( maps.length ) {
	document.addEventListener('DOMContentLoaded', () => {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = '//api-maps.yandex.ru/2.1/?lang=ru_RU&onload=initMap'; // добавляем урл, 'onload = функция' будет вызвана после загрузки api
		script.async = true;
		document.getElementsByTagName('head')[0].appendChild(script);
	})
}

window.initMap = () => {
	maps.forEach(map => {
		new Ymap(map);
	})
}

