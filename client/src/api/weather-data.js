export const weatherData = async (city) => {
  try {
    const response = await fetch(`http://localhost:4000/weather?name=${city}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(`Bad request react:fetch`);
  }
};
