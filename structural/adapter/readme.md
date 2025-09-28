### Make different implementations work together

#### Third-party weather API interface

```ts
interface WeatherAPI {
	getTempC(): number;
	getHumidity(): number;
	getWindSpeedKPH(): number;
}

// Our app's interface
interface WeatherApp {
	getTempF(): number;
	getHumidity(): number;
	getWindSpeedMPH(): number;
}
```

```ts
// Concrete implementation of third-party API
class ThirdPartyWeatherApi implements WeatherAPI {
	getTempC(): number {
		return 22; // Example: 22°C
	}

	getHumidity(): number {
		return 65; // Example: 65%
	}

	getWindSpeedKPH(): number {
		return 15; // Example: 15 kph
	}
}
```

```ts
// Without adapter - scattered conversions everywhere
const wheaterApi = new ThirdPartyWeatherApi();
if ((wheaterApi.getTempC() * 9) / 5 + 32 > 75) {
	console.log("It's hot!");
}
if (wheaterApi.getWindSpeedKPH() * 0.621371 > 10) {
	console.log("It's windy!");
}
```

```ts
// With Adapter - clean and consistent
class WeatherAdapter implements WeatherAPI {
	constructor(private weatherApi: WeatherAPI) {}

	getTempC(): number {
		return (this.weatherApi.getTempC() * 9) / 5 + 32;
	}

	getHumidity(): number {
		return this.weatherApi.getHumidity();
	}

	getWindSpeedKPH(): number {
		return this.weatherApi.getWindSpeedKPH() * 0.621371;
	}
}
```
