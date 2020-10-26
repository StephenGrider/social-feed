const _ = require('lodash');
const faker = require('faker');

const departments = _.times(5, (i) => {
  return { id: i, name: faker.commerce.department() };
});

const colors = _.times(5, (i) => {
  return { id: i, name: faker.commerce.color() };
});

const products = _.times(40, (i) => {
  return {
    id: i,
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    department: faker.random.arrayElement(departments).name,
    color: faker.random.arrayElement(colors).name,
    img: faker.image.image(),
  };
});

console.log(
  JSON.stringify({
    products,
    departments,
    colors,
  })
);
