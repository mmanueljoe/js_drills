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
    // TODO
}

// -----------------------------------------------------------------------------
// DRILL 2: fetchWithCustomHeaders
// -----------------------------------------------------------------------------
// Fetch with headers: { 'Content-Type': 'application/json', 'X-Custom': 'hello' }
// fetch(url, { headers: { ... } })
//
// Optional: also add method: 'GET' (or 'POST' if you're feeling ambitious)

async function fetchWithCustomHeaders(url, extraHeaders = {}) {
    // TODO
}

// -----------------------------------------------------------------------------
// DRILL 3: fetchWithTimeoutAndRetry
// -----------------------------------------------------------------------------
// Combine: try fetchWithTimeout. If it fails (timeout or HTTP error),
// retry up to 2 times with 1s delay between tries.
// Reuse your fetchWithTimeout. Wrap it in retry logic.

async function fetchWithTimeoutAndRetry(url, timeoutMs = 2000, maxRetries = 2) {
    // TODO
}
