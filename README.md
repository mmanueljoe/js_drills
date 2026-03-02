# JavaScript Drills – JavaScript practice + gaps playground

This folder is where I keep my JavaScript drills and experiments. I use it as a personal playground to practice core JS concepts, try patterns, and build muscle memory by writing a lot of small, focused exercises.

This is also where I come back to work on **knowledge gaps**. Any time I notice a weak spot (arrays, async flows, objects, etc.), I drop a new drill in here or extend an existing one.

## How I use this folder

- **Practice first**: I write small drills to explore one idea at a time (arrays, objects, async, etc.).
- **Repeat and refine**: I’m okay with having multiple versions of similar drills as I get better or try a new style.
- **Fill gaps on purpose**: When I notice I’m shaky on something, I come here and write drills just for that gap.
- **Reference later**: When I forget a pattern, I can jump back into the relevant file and see a concrete example.

### Drill files grouped by topic

#### Arrays & collections

- **`array_drills.js`**  
  Focused on array manipulation and iteration. I use this file to practice:
  - `map`, `filter`, `reduce`, and other array methods
  - Looping patterns and transformations
  - Thinking in immutable operations instead of in-place mutation where it makes sense

#### Objects & data structures

- **`objectOperations_drills.js`**  
  General object manipulation drills. Here I experiment with:
  - Reading and updating nested properties
  - Cloning and merging objects
  - Iterating over keys/values/entries

- **`objectOperations_drills_2.js`**  
  A follow-up set of object drills. I use this when I want more reps or to try different styles/solutions (for example, refactoring previous solutions or adding slightly more complex structures).

#### Async, promises & API patterns

- **`asyncPatterns_drills.js`**  
  A collection of async patterns. This is where I play with:
  - Sequential vs parallel execution
  - `Promise.all`, `Promise.race`, and similar utilities
  - Structuring async code so it’s readable and predictable

- **`asyncDrills_thenVsCall.js`**  
  Drills around async control flow and how I call async functions. I use this to explore:
  - Differences between chaining `.then(...)` and using `async/await`
  - How to structure functions so callers can consume promises cleanly
  - Handling success and error paths with different calling styles

- **`asyncDrills_apiOptions.js`**  
  Focused on working with APIs and thinking about configuration/options. I practice:
  - Making async calls that accept various options (like method, headers, query params)
  - Structuring helper functions for different API patterns
  - Handling responses and basic error cases

- **`asyncDrills_retryAndLoops.js`**  
  Drills around retry logic and looping with async code. I practice:
  - Retrying failed operations with a limit (and possibly delays)
  - Combining loops with `await` without accidentally blocking too much
  - Thinking about backoff strategies and when to give up

- **`asyncDrills_returnTypes.js`**  
  Focused on what async functions return and how callers use them. I use this file to:
  - Make sure I understand when I’m returning a value vs a promise
  - Keep return types consistent between related functions
  - Practice designing small async helper utilities

- **`asyncDrills_mockData.js`**  
  Drills that use mocked or fake data instead of real APIs. Helpful for:
  - Simulating network latency and failures
  - Testing async flows without hitting real services
  - Quickly prototyping async logic with predictable inputs

- **`asyncDrills_samples.js`**  
  A grab bag of sample async snippets. I treat this as a mini cookbook:
  - Short examples of common async scenarios
  - Reference patterns I can copy into new drills or real projects
  - A place to stash small experiments that don’t need their own file yet

### Tooling

- **`eslint.config.mjs`**  
  I use ESLint to keep my practice code reasonably clean and consistent. The config is set up to:
  - Lint JavaScript files with recommended rules
  - Understand both browser and Node globals
  - Handle JSON, Markdown, and CSS files if I add them later

### How I might extend this later

- Add more topic-specific files (e.g. `promises_drills.js`, `dom_drills.js`, `typescript_drills.ts`).
- Organize drills into subfolders by theme (arrays, objects, async, etc.) if this grows.
- Turn some of the better patterns into reusable snippets for actual projects.

For now, this repo stays intentionally simple: it’s just my space to practice JavaScript and have a clear, documented index of where things live.
