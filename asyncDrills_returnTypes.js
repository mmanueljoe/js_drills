/**
 * DRILL: Return types & data flow
 *
 * Focus: Track what each function RETURNS. Don't call methods that don't exist on that type.
 * Gap to fix: "I got a Response, I got parsed data — which one has .json()?"
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// -----------------------------------------------------------------------------
// DRILL 1: fetchRaw vs fetchParsed
// -----------------------------------------------------------------------------
// Implement both. Notice the difference in what they return.
//
// fetchRaw(url)  → returns the Response object (has .json(), .ok, .status)
// fetchParsed(url) → returns the parsed JSON (plain object/array, no .json())
//
// After implementing, call both and log typeof result. What's the difference?

async function fetchRaw(url) {
    // TODO
    const response = await fetch(url);
    console.log(response)
    
}

console.log(fetchRaw(`${BASE_URL}/posts`));



async function fetchParsed(url) {
    // TODO
    const response = await fetch(url);
    const parsedData = await response.json()
    console.log(parsedData);

    return parsedData
}

console.log(fetchParsed(`${BASE_URL}/posts`));
// -----------------------------------------------------------------------------
// DRILL 2: getPostAndComments
// -----------------------------------------------------------------------------
// Fetch post with id=1, then fetch its comments (comments?postId=1).
// The second fetch depends on the first (you need postId from post).
//
// Return { post, comments }.
// Watch: does fetchParsed return a Response or data? Do you need .json() on it?

async function getPostAndComments(postId) {
    // TODO
}

// -----------------------------------------------------------------------------
// DRILL 3: parallelThenCombine
// -----------------------------------------------------------------------------
// Fetch /posts and /todos in parallel.
// Use fetchParsed (which returns data). Do NOT call .json() on the result.
// Return { postsCount: number, todosCount: number }

async function parallelThenCombine() {
    // TODO
}
