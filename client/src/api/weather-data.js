export const weatherData = async (city) => {
  const response = await fetch(`http://localhost:4000/weather?name=${city}`);

  const data = await response.json();

  return data;
};
