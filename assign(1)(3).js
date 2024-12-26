// Array to store city weather data
const cityWeather = [
    { cityName: "New York", temperature: 30, condition: "Sunny" },
    { cityName: "London", temperature: 18, condition: "Cloudy" },
    { cityName: "Mumbai", temperature: 35, condition: "Rainy" },
    { cityName: "Tokyo", temperature: 25, condition: "Sunny" },
    { cityName: "Sydney", temperature: 22, condition: "Cloudy" },
    { cityName: "Cairo", temperature: 40, condition: "Sunny" },
    { cityName: "Paris", temperature: 20, condition: "Rainy" }
];


// Function to add a new city weather object
const addCityWeather = (cityName, temperature, condition) => {
    cityWeather.push({ cityName, temperature, condition });
    console.log(`Added: ${cityName} with Temp: ${temperature}°C, Condition: ${condition}`);
};

// Function to find the hottest city using find()
const findHottestCity = () => {
    const hottestTemp = Math.max(...cityWeather.map(city => city.temperature));
    const hottestCity = cityWeather.find(city => city.temperature === hottestTemp);
    if (hottestCity) {
        const { cityName, temperature, condition } = hottestCity; // Destructure details
        console.log(`Hottest City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
        return hottestCity;
    }
    console.log("No cities in the list.");
};

// Function to filter cities by weather condition
const filterByCondition = (condition) => {
    const filteredCities = cityWeather.filter(city => city.condition === condition);
    console.log(`Cities with Condition '${condition}':`, filteredCities);
    return filteredCities;
};

// Function to map cities to their names and temperatures
const mapCityTemperatures = () => {
    const mappedCities = cityWeather.map(({ cityName, temperature }) =>
        `City: ${cityName}, Temp: ${temperature}°C`
    );
    console.log("City Temperature List:");
    mappedCities.forEach(city => console.log(city));
    return mappedCities;
};

// Example usage
addCityWeather("New York", 30, "Sunny");
addCityWeather("London", 18, "Cloudy");
addCityWeather("Mumbai", 35, "Rainy");
addCityWeather("Tokyo", 25, "Sunny");
addCityWeather("Sydney", 22, "Cloudy");

console.log("\nFinding the Hottest City:");
findHottestCity();

console.log("\nFiltering Cities by Condition 'Cloudy':");
filterByCondition("Cloudy");

console.log("\nMapping City Temperatures:");
mapCityTemperatures();
