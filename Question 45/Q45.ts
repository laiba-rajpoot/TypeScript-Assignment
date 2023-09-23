//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface CarInfo {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function CreateCar(manufacturer: string, model: string, ...args: any[]): CarInfo {
  const car: CarInfo = {
    manufacturer,
    model,
  };

  // Additional Keyword Arguments
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];
    car[key] = value;
  }

  return car;
}

const myCar = CreateCar("Toyota", "Supra", "color", "blue", "year", 2023, "optionalFeature", "Sunroof");

console.log(myCar);