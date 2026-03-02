/**
 * DRILL: API options & correct property names
 *
 * Focus: fetch(), AbortController, and other APIs have specific option shapes.
 * Gap to fix: "I passed controller but fetch expects signal"
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// -----------------------------------------------------------------------------
// DRILL 1: fetchWithTimeout
// -----------------------------------------------------------------------------
// Abort the fetch if it takes longer than timeoutMs.
// fetch(url, options) — what goes in options?
// Look up: fetch accepts { signal: AbortController.signal }
// You create controller, pass controller.signal to fetch.
// setTimeout → controller.abort(). clearTimeout in finally.
//
// Also: catch(error) — not catch { } if you use error in the block.

async function fetchWithTimeout(url, timeoutMs = 3000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try{
        const response = await fetch(url, {
            signal: controller.signal
        })

        if(!response.ok){
            throw new Error(`Request failed with status: ${response.status}`)
        }

        const data = response.json();

        return data;
    }catch(error){
        console.log(`Error fetching data: ${error}`);
        throw error;
    }finally{
        
        clearTimeout(timeoutId);
    }
    
}

const data = await fetchWithTimeout(`${BASE_URL}/posts`, 4000);
console.log(data);

// -----------------------------------------------------------------------------
// DRILL 2: fetchWithCustomHeaders
// -----------------------------------------------------------------------------
// Fetch with headers: { 'Content-Type': 'application/json', 'X-Custom': 'hello' }
// fetch(url, { headers: { ... } })
//
// Optional: also add method: 'GET' (or 'POST' if you're feeling ambitious)

async function fetchWithCustomHeaders(url, extraHeaders = {}) {
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Custom': 'hello',
                ...extraHeaders
            }
        });

        if(!response.ok){
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        return data

    }catch(error){
        console.log(`Error fetching data: ${error}`);
        throw error;
    }
}

const posts = await fetchWithCustomHeaders(`${BASE_URL}/posts`);
console.log(posts)

// -----------------------------------------------------------------------------
// DRILL 3: fetchWithTimeoutAndRetry
// -----------------------------------------------------------------------------
// Combine: try fetchWithTimeout. If it fails (timeout or HTTP error),
// retry up to 2 times with 1s delay between tries.
// Reuse your fetchWithTimeout. Wrap it in retry logic.

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeoutAndRetry(url, timeoutMs = 2000, maxRetries = 2) {
   let attempt = 0;

   while(attempt <= maxRetries){
    try{
        const data = await fetchWithTimeout(url, timeoutMs);

        return data;
    }catch(error){
        if(attempt === maxRetries){
            throw error;
        }

        attempt += 1;
        await wait(1000)
    }
   }
}


const yetAnotherPost = await fetchWithTimeoutAndRetry(`${BASE_URL}/posts`);
console.log(yetAnotherPost)