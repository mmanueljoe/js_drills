/**
 * MOCK DATA: Use for drills when you don't want to hit real APIs
 *
 * Simulates delayed responses. Call mockFetch instead of fetch during practice.
 */

/**
 * Simulates fetch with configurable delay and optional failure
 *
 * @param {string} url - ignored for mock; used to pick mock response
 * @param {object} options - { delayMs: 500, fail: false, status: 200 }
 * @returns {Promise<Response-like>} - has .ok, .json(), .status
 */
function mockFetch(url, options = {}) {
    const { delayMs = 300, fail = false, status = 200 } = options;

    const mockResponses = {
        '/posts': Array.from({ length: 5 }, (_, i) => ({ id: i + 1, title: `Post ${i + 1}` })),
        '/todos': Array.from({ length: 5 }, (_, i) => ({ id: i + 1, title: `Todo ${i + 1}`, completed: false })),
        '/posts/1': { id: 1, title: 'Post 1', userId: 1 },
        '/comments': Array.from({ length: 3 }, (_, i) => ({ id: i + 1, postId: 1, body: `Comment ${i + 1}` })),
    };

    const path = url.replace(/^https?:\/\/[^/]+/, '') || '/posts';
    const data = mockResponses[path] ?? { message: 'Not found' };
    const ok = status >= 200 && status < 300 && !fail;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = {
                ok,
                status,
                json: () => Promise.resolve(data),
            };
            if (ok) resolve(res);
            else reject(new Error(`HTTP ${status}`));
        }, delayMs);
    });
}

// Example usage in your drills:
// const response = await mockFetch('/posts', { delayMs: 500 });
// const data = await response.json();
