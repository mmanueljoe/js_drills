// DRILL 4: Object operations — extended practice
// Complete each task. Use the sample data provided. Write your own code.

const products = [
  { id: 101, name: 'Laptop', category: 'electronics', price: 1200 },
  { id: 102, name: 'Phone', category: 'electronics', price: 800 },
  { id: 103, name: 'Shoes', category: 'fashion', price: 120 },
  { id: 104, name: 'Shirt', category: 'fashion', price: 35 },
];

const defaultSettings = {
  theme: 'light',
  fontSize: 14,
  notifications: true,
};

const userSettings = {
  theme: 'dark',
  notifications: false,
};

const order = {
  id: 1,
  customer: { name: 'Jane', email: 'jane@example.com' },
  items: [{ productId: 101, qty: 2 }, { productId: 102, qty: 1 }],
  total: 250.5,
};

// -----------------------------------------------------------------------------
// TASK 1: Merge with defaults (spread)
// Combine defaultSettings and userSettings so userSettings overrides defaults.
// Result should have theme: 'dark', fontSize: 14 (from default), notifications: false.
// Store in `finalSettings`.
// -----------------------------------------------------------------------------

const finalSettings = {...defaultSettings, ...userSettings};
console.log(finalSettings);

// -----------------------------------------------------------------------------
// TASK 2: Add new property without mutating (spread)
// Create a new object from defaultSettings that adds a property `language: 'en'`.
// Do not change the original defaultSettings. Store in `settingsWithLang`.
// -----------------------------------------------------------------------------

const settingsWithLang = {...defaultSettings, language: 'en' }
console.log(settingsWithLang)

// -----------------------------------------------------------------------------
// TASK 3: Update one property immutably (spread)
// Create a copy of defaultSettings with only `fontSize` changed to 18.
// Store in `settingsLargeFont`.
// -----------------------------------------------------------------------------

const settingsLargeFont = { ...defaultSettings, fontSize: 18};
console.log(settingsLargeFont)

// -----------------------------------------------------------------------------
// TASK 4: Omit one property (destructuring + rest)
// From defaultSettings, create a new object that has everything EXCEPT `notifications`.
// Use destructuring with rest. Store in `settingsNoNotifications`.
// -----------------------------------------------------------------------------

const { theme, notifications } = defaultSettings;
const settingsNoNotifications = {theme, notifications};

console.log(settingsNoNotifications);

// -----------------------------------------------------------------------------
// TASK 5: Group products by category
// Group the `products` array by `category`. Result: { electronics: [...], fashion: [...] }
// Use reduce. Store in `productsByCategory`.
// -----------------------------------------------------------------------------

const productsByCategory = products.reduce((category, product) => {

  const k = product.category;

  if(!category[k]){
    category[k] = [];
  }

  category[k].push(product.name);

  return category;
}, {});

console.log(productsByCategory)

// -----------------------------------------------------------------------------
// TASK 6: Array of objects → lookup object by id
// Turn `products` into an object keyed by id. So you can do productsById[101] to get
// the Laptop. Store in `productsById`.
// -----------------------------------------------------------------------------

const productsById = Object.fromEntries(products.map(product => [product.id, product.name]));
console.log(productsById);

// -----------------------------------------------------------------------------
// TASK 7: Safe access through nested object
// Safely get order.customer.name. If order, customer, or name is missing,
// your code should NOT throw. Store in `customerName`. Use optional chaining.
// -----------------------------------------------------------------------------

const customerName = order?.customer?.name;
console.log(customerName);

// -----------------------------------------------------------------------------
// TASK 8: Safe access with fallback
// Get the first item's productId from order.items. If items is empty or missing,
// use null as fallback. Store in `firstProductId`. Use optional chaining + nullish coalescing (??).
// -----------------------------------------------------------------------------

const firstProductId = order?.items[0]?.productId ?? null;
console.log(firstProductId)

// -----------------------------------------------------------------------------
// TASK 9: Shallow vs deep — understand the difference
// (A) Create a shallow copy of `order`. Change order.items[0].qty to 99.
//     Does the copy's items[0].qty also become 99? (Just think or test.)
// (B) Create a deep copy of `order`. Change order.items[0].qty to 99.
//     Does the copy's items[0].qty stay 2? (Just think or test.)
// Implement both and add a one-line comment explaining what you observed.
// -----------------------------------------------------------------------------


const shallowCopyOfOrder = {...order}
shallowCopyOfOrder.items[0].qty = 99;

console.log(shallowCopyOfOrder)
console.log(order)


const deepCopyOfOrder = structuredClone(order);
deepCopyOfOrder.items[0].qty = 100;


console.log(deepCopyOfOrder)
console.log(order)


// -----------------------------------------------------------------------------
// TASK 10: Combine spread and rest in function
// Write a function `updateUser(user, updates)` that returns a NEW user object
// with properties from `updates` merged over `user`. Do not mutate the original.
// Example: updateUser({ name: 'John', age: 25 }, { age: 26 }) → { name: 'John', age: 26 }
// -----------------------------------------------------------------------------

function updateUser(user, updates) {

    user = {...user, ...updates}
    return user;
}

console.log(updateUser({ name: 'John', age: 25 }, { age: 26 }))