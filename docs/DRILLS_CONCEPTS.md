## js_drills concepts guide

This document is my **concept map** for this folder. When I come here to work on gaps, I can use this file to:

- See which concepts I’m practicing.
- Jump straight to the right drill file.
- Decide where to add a new drill when I notice a new gap.

---

## 1. Arrays & collections

**What I’m practicing here**

- Transforming arrays with `map`, `filter`, `reduce`, `flatMap`, etc.
- Looping patterns (for loops, `for...of`, higher-order methods).
- Avoiding accidental mutation when it matters.
- Turning messy data into clean data structures.

**Where I practice this**

- `array_drills.js`  
  - Core array method reps (`map`, `filter`, `reduce`, `find`, `some`, `every`).
  - Combining methods in chains to solve small problems.
  - Comparing different ways to write the same transformation (loops vs methods).

**Ideas for future array drills**

- Working with paginated arrays (chunking / batching).
- Grouping items (e.g. by category or key).
- Sorting with custom compare functions.

---

## 2. Objects & data structures

**What I’m practicing here**

- Building and updating nested objects safely.
- Cloning, merging, and reshaping data.
- Iterating over keys/values/entries.
- Thinking about when to use objects vs arrays vs Maps/Sets.

**Where I practice this**

- `objectOperations_drills.js`  
  - Basic create/read/update/delete patterns on objects.
  - Accessing nested properties (with and without optional checks).
  - Turning arrays into keyed objects and back.

- `objectOperations_drills_2.js`  
  - More complex or “second-pass” versions of object drills.
  - Refactoring earlier solutions to be cleaner or more reusable.
  - Trying out different styles (e.g. using helpers or utility functions).

**Ideas for future object drills**

- Practicing with `Map` and `Set` for certain problems.
- Normalizing and denormalizing data (like API responses).
- Converting between different data shapes that UIs/APIs might need.

---

## 3. Async, promises & API patterns

**What I’m practicing here**

- Understanding how promises flow through code.
- Choosing between `.then` chains and `async/await`.
- Working with APIs: options, headers, query params, and error handling.
- Structuring async code so it’s predictable and debuggable.

### 3.1 General async patterns

- `asyncPatterns_drills.js`  
  - Sequential vs parallel async operations.
  - Using `Promise.all`, `Promise.allSettled`, `Promise.race` where appropriate.
  - Avoiding “callback hell” now that I have promises/async–await.

### 3.2 Calling styles: then vs async/await

- `asyncDrills_thenVsCall.js`  
  - Writing the same async logic in both `.then` style and `async/await` style.
  - Seeing how error handling changes between the two approaches.
  - Making sure callers of my functions always get a clear, consistent result (resolved or rejected).

### 3.3 APIs and configurable calls

- `asyncDrills_apiOptions.js`  
  - Designing functions that accept options (method, headers, body, params, etc.).
  - Keeping the call sites clean while still being flexible.
  - Handling common API response patterns and basic errors.

### 3.4 Retries, loops & robustness

- `asyncDrills_retryAndLoops.js`  
  - Implementing retry logic with a max attempts limit.
  - Combining loops with `await` carefully so I don’t block more than I intend.
  - Thinking about backoff strategies (e.g. waiting longer between retries).

### 3.5 Return types & function design

- `asyncDrills_returnTypes.js`  
  - Making sure every async function’s return type is clear and intentional.
  - Avoiding accidental double-wrapping (like `Promise<Promise<T>>` situations).
  - Keeping related functions consistent so they’re easier to compose.

### 3.6 Mock data & sandboxed flows

- `asyncDrills_mockData.js`  
  - Using fake data to test async flows without real APIs.
  - Simulating delays, timeouts, and failures.
  - Practicing how I’d handle different response shapes and error scenarios.

### 3.7 Async snippets “cookbook”

- `asyncDrills_samples.js`  
  - Small, focused examples of async patterns I want to remember.
  - Quick references I can copy into new drills or real projects.
  - A parking lot for experiments that don’t need their own dedicated file yet.

**Ideas for future async drills**

- Aborting fetches / requests and handling cancellations.
- Queues and concurrency limits (only N requests at a time).
- More advanced error-handling patterns (e.g. centralized handlers).

---

## 4. How I plan to “organize folders” as this grows

Right now everything lives in the root of this folder. As this practice area grows, I can:

- Move drills into subfolders by topic, like:
  - `arrays/array_drills.js`
  - `objects/objectOperations_drills.js`
  - `async/asyncPatterns_drills.js`, `async/asyncDrills_*`
- Add a short `README.md` inside each subfolder that links back to this concepts guide.
- Keep this `DRILLS_CONCEPTS.md` as the **single map** that shows all topics and where to find them.

The rule for myself is simple: **when I notice a gap, I either add a new drill file under the right topic or extend an existing one, and then update this concepts guide so Future Me can find it quickly.**

