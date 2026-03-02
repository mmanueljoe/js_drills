// DRILL 1: Array transformations

const users = [
    {
        id: 1, 
        name: 'John',
        age: 25
    },
    {
        id: 2,
        name: 'Jane',
        age: 30,
    },
    {
        id: 3,
        name: 'Kojo',
        age: 45
    },
    {
        id: 4,
        name: 'Abraham',
        age: 60
    }

]

// filter users over 25
const usersOver25 = users.filter((user) => user.age > 25);

// map just names
const userNames = users.map(user => user.name)


// find by user by id
const idx = 1;
const user = users.find(user => user.id === idx);

// reduce total age
const totalAge = users.reduce((totalAge, currentUser) => totalAge + currentUser.age, 0);

// sort age
// users.sort(user => user.age) - mutates users and sort accepts two argument not one
const usersByAgeAsc = [...users].sort((a,b) => a.age - b.age);

const usersByAgeDec = [...users].sort((a,b) => (b.age - a.age));


// chain multiple operations
const namesOver30 = users.filter(user => user.age > 30).map(user => user.name);


// has seniors
const hasSeniors = users.some(user => user.age >= 60);

const allAdults = users.every(user => user.age >= 18);


// find index of user by name
const indexOfJane = users.findIndex(user => user.name === 'Jane');

const hasUserWithId4 = users.some(user => user.id === 4);



// immutable updates (add)
const addUsers = [...users, {
    id: 5,
    name: 'Barack',
    age: 65
}];


// immutable updates (update)
const modifiedUsers = users.map(user => user.id === 2 ? {
    ...user,
    age: 36
} : user);

// immutable updates (remove)
const newList = users.filter(user => user.id !== idx );


// DRILL 2: Products and cart operations (write the code yourself)
// New dataset: products in a store
const products = [
    { id: 101, name: 'Laptop', category: 'electronics', price: 1200, inStock: true },
    { id: 102, name: 'Phone', category: 'electronics', price: 800, inStock: false },
    { id: 103, name: 'Shoes', category: 'fashion', price: 120, inStock: true },
    { id: 104, name: 'T‑Shirt', category: 'fashion', price: 35, inStock: true },
    { id: 105, name: 'Fridge', category: 'appliance', price: 600, inStock: false },
];

// TASK 1: Get all products that are in stock.
// - Use the correct array method and return a new array.
// - Store the result in a variable named `inStockProducts`.
const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);

// TASK 2: Get an array of just product names.
// - Store in a variable named `productNames`.
const productNames = products.map(product => product.name);
console.log(productNames);

// TASK 3: Find the first product in the "fashion" category.
// - Store in a variable named `firstFashionProduct`.
const firstFashionProduct = products.find(product => product.category === 'fashion');
console.log(firstFashionProduct);

// TASK 4: Calculate the total price of all products.
// - Store the numeric result in `totalProductPrice`.
const totalProductPrice = products.reduce((totalPrice, product) => {
    return totalPrice + product.price
}, 0);

console.log(totalProductPrice)

// TASK 5: Sort products by price from lowest to highest, without mutating the original `products` array.
// - Store the sorted array in `productsByPriceAsc`.
const productsByPriceAsc = [...products].sort((product1, product2) => (product1.price - product2.price));
console.log(productsByPriceAsc)

// TASK 6: Check if there is at least one product that costs more than 1000.
// - Store the boolean result in `hasExpensiveProduct`.
const hasExpensiveProduct = products.some(product => product.price > 1000);
console.log(hasExpensiveProduct)

// TASK 7: Check if all products are in stock.
// - Store the boolean result in `allProductsInStock`.
const allProductsInStock = products.every(product => product.inStock === true);
console.log(allProductsInStock) 
 

// DRILL 3: Orders and aggregation (write the code yourself)
// New dataset: orders with line items
const orders = [
    { id: 1, userId: 1, status: 'shipped', total: 250.5 },
    { id: 2, userId: 2, status: 'pending', total: 99.99 },
    { id: 3, userId: 1, status: 'cancelled', total: 120 },
    { id: 4, userId: 3, status: 'shipped', total: 560 },
];

// TASK 8: Get all orders with status 'shipped'.
// - Store in `shippedOrders`.
const shippedOrders = orders.filter(order => order.status === 'shipped');
console.log(shippedOrders);

// TASK 9: Get the total amount spent by user with id 1 (sum of their orders' `total` values).
// - Store numeric result in `totalSpentByUser1`.
const totalSpentByUser1 = orders.filter(order => order.userId === 1).reduce((total, order) => total + order.total, 0);
console.log(totalSpentByUser1);

// TASK 10: Get an array of order ids for orders that are NOT cancelled.
// - Store in `activeOrderIds`.
const activeOrderIds = orders.filter(order => order.status !== 'cancelled').map(order => order.id);
console.log(activeOrderIds)

// TASK 11: Check if there is at least one order with total >= 500.
// - Store boolean in `hasBigOrder`.
const hasBigOrder = orders.some(order => order.total >= 500);
console.log(hasBigOrder);


// DRILL 4: Nested arrays and flattening (write the code yourself)
// New dataset: tags per post (array of arrays)
const postTags = [
    ['javascript', 'arrays'],
    ['react', 'frontend'],
    ['node', 'backend', 'javascript'],
];

// TASK 12: Flatten `postTags` into a single array of strings.
// - Store in `allTags`.
const allTags = postTags.flat();
console.log(allTags);

// TASK 13: Remove duplicate tags from `allTags` while keeping the first occurrence of each.
// - Store in `uniqueTags`.
const uniqueTags = [...new Set(allTags)];
console.log(uniqueTags);

// TASK 14: Get only the tags that contain the substring "script".
// - Store in `scriptTags`.
const scriptTags = uniqueTags.filter(tag => tag.includes("script"));
console.log(scriptTags);


// DRILL 5: Chaining practice (write the code yourself)
// Re‑use the `users` array from DRILL 1.

// TASK 15: Get an array of user names for users older than 30, sorted by age ascending.
// - Use chaining with `filter`, `sort`, and `map` in a clean order.
// - Store in `namesOfUsersOver30SortedByAge`.
const namesOfUsersOver30SortedByAge = users.filter(user => user.age > 30).sort((a,b) => a.age - b.age).map(user =>  user.name);

console.log(namesOfUsersOver30SortedByAge);

// TASK 16: From `products`, get names of in‑stock products that cost less than 500, sorted by price ascending.
// - Store in `cheapInStockProductNames`.
const cheapInStockProductNames = inStockProducts.filter(product => product.price < 500).sort((a,b) => a.price - b.price)
    .map(product => product.name)
console.log(cheapInStockProductNames)
    
