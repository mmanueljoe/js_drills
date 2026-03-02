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

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return response;

    }catch(error){
        console.log(`Error fetching data: ${error}`);
        throw error;
    }

    
}

const rawRes = await fetchRaw(`${BASE_URL}/posts`)
console.log(rawRes);



async function fetchParsed(url) {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Request failed with status: ${response.status}`)
        }
        const parsedData = await response.json()
        return parsedData

    }catch(error){
        console.log(`Error fetching data: ${error}`);
        throw error;
    }

}

const parsedRes = await fetchParsed(`${BASE_URL}/posts`)

console.log(parsedRes);
// -----------------------------------------------------------------------------
// DRILL 2: getPostAndComments
// -----------------------------------------------------------------------------
// Fetch post with id=1, then fetch its comments (comments?postId=1).
// The second fetch depends on the first (you need postId from post).
//
// Return { post, comments }.
// Watch: does fetchParsed return a Response or data? Do you need .json() on it?

async function getPostAndComments(postId) {
        const post = await fetchParsed(`${BASE_URL}/posts/${postId}`)
        
        const comments = await fetchParsed(`${BASE_URL}/comments?postId=${post.id}`);

        return {post, comments};


}

const {post , comments} = await getPostAndComments(1);
console.log(post);
console.log(comments)

// -----------------------------------------------------------------------------
// DRILL 3: parallelThenCombine
// -----------------------------------------------------------------------------
// Fetch /posts and /todos in parallel.
// Use fetchParsed (which returns data). Do NOT call .json() on the result.
// Return { postsCount: number, todosCount: number }

async function parallelThenCombine() {
    const [posts, todos] = await Promise.all([
        fetchParsed(`${BASE_URL}/posts`),
        fetchParsed(`${BASE_URL}/todos`),
    ])

    return {
        postsCount: posts.length,
        todosCount: todos.length,
    }
}

const {postsCount, todosCount} = await parallelThenCombine();
console.log(postsCount)

console.log(todosCount);
