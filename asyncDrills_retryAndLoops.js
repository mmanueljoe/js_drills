/**
 * DRILL: Retry logic & loop exit conditions
 *
 * Focus: while(true) must have clear exits. Success = return. Failure = throw or retry.
 * Gap to fix: "My retry loop never returns / never stops"
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// -----------------------------------------------------------------------------
// DRILL 1: fetchWithRetry (minimal)
// -----------------------------------------------------------------------------
// Retry up to maxRetries times. On success, RETURN the data (exit the loop).
// On HTTP error (e.g. 404) or network error, catch, increment attempts.
// If attempts > maxRetries → throw (give up).
// Else → wait delayMs, then loop again.
//
// Must have: return on success, throw when giving up, await delay before retry.

async function fetchWithRetry(url, maxRetries = 3, delayMs = 500) {
    // TODO
}

// -----------------------------------------------------------------------------
// DRILL 2: fetchFirstSuccess
// -----------------------------------------------------------------------------
// Given an array of URLs, try them one by one (sequentially).
// Return the first one that succeeds. If all fail, throw the last error.
// No retries — just try next URL.
//
// Loop: for each url, try fetch. If ok, return data. If error, continue.
// After loop, throw (none succeeded).

async function fetchFirstSuccess(urls) {
    // TODO
}

// -----------------------------------------------------------------------------
// DRILL 3: retryWithBackoff
// -----------------------------------------------------------------------------
// Same as fetchWithRetry, but delay doubles each attempt: 500ms, 1s, 2s, ...
// delayMs is the initial delay. After each failure: delayMs = delayMs * 2
//
// Track: attempts, currentDelay. On retry, await currentDelay, then double it.

async function retryWithBackoff(url, maxRetries = 3, initialDelayMs = 500) {
    // TODO
}
