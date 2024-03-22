import technologies from "./technology-fake";

// Define a function to get technology by ID
export function getTechnologyById(id) {
  return technologies.find(tech => tech.id === id);
}
