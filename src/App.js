import axios from "axios";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function App() {
	const [cityName, setCityName] = useState("");
	const [currentTemperature, setCurrentTemperature] = useState("");
	const [temperatureFeelsLike, setTemperatureFeelsLike] = useState("");
	const [maxTemperature, setMaxTemperature] = useState("");
	const [minTemperature, setMinTemperature] = useState("");
	const [humidity, setHumidity] = useState("");
	const [windSpeed, setWindSpeed] = useState("");
	const [weatherType, setWeatherType] = useState("");
	function request() {
		var inputcityName = document.querySelector(".searchField").value;
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${inputcityName}&units=imperial&appid=a2fc69156caed07b26520a9387e1c681`
			)
			.then(function (response) {
				console.log(response);
				// handle success
				setCityName(response.data.name);
				setCurrentTemperature(response.data.main.temp);
				setTemperatureFeelsLike(response.data.main.feels_like);
				setMaxTemperature(response.data.main.temp_max);
				setMinTemperature(response.data.main.temp_min);
				setHumidity(response.data.main.humidity);
				setWeatherType(response.data.weather[0].description);
				setWindSpeed(response.data.wind.speed);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}
	return (
		<div className="background bg-gray-100">
			<div className="md:grid md:grid-cols-2 flex flex-col">
				{/* Left Side */}
				<div className="text-gray-300 bg-gray-700 opacity-75 md:w-8/12 h-screen">
					<span className="flex items-center w-full">
						<input
							className="text-white flex-grow searchField bg-transparent placeholder-white p-10 h-28 border-b-2 border-blue-500 focus:shadow focus:outline-none"
							placeholder="Search for a city"
						></input>
						<button
							onClick={request}
							className="bg-blue-500 text-white p-10 h-28 text-2xl"
						>
							<AiOutlineSearch />
						</button>
					</span>
					<div className="pl-10 pr-10 pt-10 grid grid-rows gap-10">
						<h1 className="text-2xl">Weather Details</h1>
						<div className="flex flex-col gap-5">
							<span className="flex items-center justify-between w-full">
								<p>Max Temperature</p>
								<p>{maxTemperature}&#8457;</p>
							</span>
							<span className="flex items-center justify-between w-full">
								<p>Min Temperature</p>
								<p>{minTemperature}&#8457;</p>
							</span>
							<span className="flex items-center justify-between w-full">
								<p>Temperature Feels Like</p>
								<p>{temperatureFeelsLike}&#8457;</p>
							</span>
							<span className="flex items-center justify-between w-full">
								<p>Skys</p>
								{weatherType}
							</span>
							<span className="flex items-center justify-between w-full">
								<p>Humidity</p>
								<p className="capitalize">{humidity}</p>
							</span>
							<span className="flex items-center justify-between w-full">
								<p>Wind</p>
								{windSpeed}
							</span>
						</div>
					</div>
				</div>
				{/* Right Side */}
				<div className="flex md:justify-end items-end pr-10 md:mt-0 mt-10 md:ml-5 ml-10">
					<div className="text-white opacity-75 grid mb-20">
						<p className="text-4xl">{currentTemperature}&#8457;</p>

						<p className="md:text-6xl text-5xl">{cityName}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
