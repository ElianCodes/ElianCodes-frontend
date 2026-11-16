/**
 * [longitude, latitude] per tour city, for the map on /events. The build fails with a clear
 * message when tour.yaml mentions a city that isn't listed here yet.
 */
const CITIES: Record<string, [number, number]> = {
	"Alicante|ES": [-0.48, 38.35],
	"Amsterdam|NL": [4.9, 52.37],
	"Athens|GR": [23.73, 37.98],
	"Berlin|DE": [13.4, 52.52],
	"Brussels|BE": [4.35, 50.85],
	"Bucharest|RO": [26.1, 44.43],
	"Casablanca|MA": [-7.59, 33.57],
	"Coimbra|PT": [-8.43, 40.21],
	"Gdynia|PL": [18.53, 54.52],
	"Ghent|BE": [3.72, 51.05],
	"Ho Chi Minh City|VN": [106.66, 10.76],
	"Jackson, MS|US": [-90.18, 32.3],
	"Krakow|PL": [19.94, 50.06],
	"Kuala Lumpur|MY": [101.69, 3.14],
	"Larvik|NO": [10.03, 59.05],
	"Lille|FR": [3.06, 50.63],
	"London|GB": [-0.13, 51.51],
	"Milan|IT": [9.19, 45.46],
	"New York|US": [-74.01, 40.71],
	"Novi Sad|RS": [19.83, 45.27],
	"Paris|FR": [2.35, 48.86],
	"Porto|PT": [-8.61, 41.15],
	"Rome|IT": [12.5, 41.9],
	"Singapore|SG": [103.82, 1.35],
	"Tunis|TN": [10.18, 36.81],
	"Vilnius|LT": [25.28, 54.69],
	"Warsaw|PL": [21.01, 52.23],
	"Zadar|HR": [15.23, 44.12],
	"Zurich|CH": [8.54, 47.38],
};

export function cityCoordinates(city: string, country: string) {
	return CITIES[`${city}|${country}`];
}
