/**
 * SAMPLES: Skeleton & reference structure
 *
 * Use this file as a template. Function signatures and JSDoc describe
 * what to implement. Do NOT copy-paste — use as a guide.
 *
 * One minimal example is filled in to show the pattern. Rest are stubs.
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// =============================================================================
// SAMPLE 1: fetchParsed (WORKED EXAMPLE — study this)
// =============================================================================
// Returns: parsed JSON (object/array). Not a Response.
// So callers must NOT do result.json() — it's already parsed.

async function fetchParsedSample(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json(); // returns the parsed data
}

// =============================================================================
// SAMPLE 2: Sequential chain with .then (STRUCTURE ONLY)
// =============================================================================
// Pattern: each .then returns the next async operation.
// The returned Promise becomes the input to the next .then.

function sequentialThenSample() {
    return fetch(`${BASE_URL}/todos`)
        .then(res => res.json())
        .then(todos => {
            console.log(todos);
            return fetch(`${BASE_URL}/posts`); // return next fetch
        })
        .then(res => res.json())
        .then(posts => {
            console.log(posts);
            return posts;
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}

// =============================================================================
// SAMPLE 3: fetchWithTimeout (STRUCTURE ONLY — you implement)
// =============================================================================
// fetch(url, { signal: controller.signal })
// catch(error) — not catch { } when using error

async function fetchWithTimeoutSkeleton(url, timeoutMs) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        // handle
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

// =============================================================================
// SAMPLE 4: Retry loop (STRUCTURE ONLY — you implement)
// =============================================================================
// while(true) needs: return (success), throw (give up), delay (retry)

async function retrySkeleton(url, maxRetries, delayMs) {
    let attempts = 0;

    while (true) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            return data; // success — exit
        } catch (error) {
            attempts++;
            if (attempts > maxRetries) throw error; // give up
            await new Promise(r => setTimeout(r, delayMs)); // wait, then retry
        }
    }
}
