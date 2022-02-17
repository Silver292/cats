import faker from "@faker-js/faker";

export const getCats = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12')
    const catData = await response.json()
    return catData.map(cat => (
        {
            id: cat.id,
            imageUrl: cat.url,
            name: faker.name.firstName(),
            price: faker.commerce.price(),
            location: faker.address.cityName(),
            breed: faker.animal.cat(),
            description: faker.lorem.paragraph()
        }
    ))
}