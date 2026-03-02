/**
 * DRILL: .then(fn) vs .then(fn())
 *
 * Focus: When does the function run? What is passed into .then?
 * Gap to fix: "I thought this would run later, but it ran immediately"
 *
 * Rule: .then(callback) — callback runs when promise resolves, receives the value
 *       .then(fn()) — fn runs NOW, .then receives fn's return value
 */

/**eslint-based rule: ignore-unusedvars */
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// -----------------------------------------------------------------------------
// DRILL 1: sequentialWithThen (no async/await)
// -----------------------------------------------------------------------------
// Chain: fetch /todos → parse JSON → log it → THEN fetch /posts → parse → log
// The second fetch must START inside the previous .then.
// Hint: return fetch(...) from a .then so the next .then gets the Response.

function sequentialWithThen() {
    fetch(`${BASE_URL}/todos`)
        .then(todosRes => todosRes.json())
        .then(todos => {
        console.log(todos)

        return fetch(`${BASE_URL}/posts`);
        })
        .then(postsRes => postsRes.json())
        .then(posts => 
           console.log(posts)
        ).catch(error => console.log(`Error fetching data: ${error}`))
}

sequentialWithThen();


// -----------------------------------------------------------------------------
// DRILL 2: delayThenFetch
// -----------------------------------------------------------------------------
// Wait 1 second, THEN fetch /posts.
// Wrong: .then(setTimeout(...)) — setTimeout runs immediately
// Right: wrap setTimeout in a Promise, then .then(fetch) after it resolves

function delayThenFetch() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
    .then(() => fetch(`${BASE_URL}/posts`))
    .then(res => res.json())
    .then(posts => {
        return posts
    }).catch(error => console.log(`Error fetching data: ${error}`))
}

delayThenFetch();

// -----------------------------------------------------------------------------
// DRILL 3: whatHappensHere
// -----------------------------------------------------------------------------
// Don't implement. Just answer in a comment:
// What does .then receive in each step?
//
// fetch(url).then(res => res.json()).then(data => ...)
//            ↑ res = ?    ↑ data = ?
//
// fetch(url).then(fetch(otherUrl)).then(x => x.json())
//            ↑ what is passed to .then?  ↑ does x.json() work?

// YOUR ANSWER:
// .then(res => ...) receives:
// .then(data => ...) receives:
// .then(fetch(otherUrl)) - fetch runs when? .then receives:
