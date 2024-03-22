import technologies from "./technology-fake"

export default defineEventHandler((event) => {
  return {
    data: technologies
  }
})
