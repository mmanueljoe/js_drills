# Async Drills — How to use

These drills target the gaps identified in your async patterns. Do them in order.

## Files

| File | Focus | Gap it targets |
|------|--------|------------------|
| `asyncDrills_returnTypes.js` | What does each function return? Response vs parsed data | Calling `.json()` on the wrong type |
| `asyncDrills_thenVsCall.js` | `.then(fn)` vs `.then(fn())` — when does it run? | Sequential chains failing; immediate vs deferred execution |
| `asyncDrills_retryAndLoops.js` | `while(true)` exit conditions; retry vs give up | Infinite loops; never returning |
| `asyncDrills_apiOptions.js` | Correct option names: `signal`, headers | `{ controller }` vs `{ signal: controller.signal }` |
| `asyncDrills_samples.js` | Reference structure — 1–2 worked examples + skeletons | Use as a guide, don't copy |
| `asyncDrills_mockData.js` | Optional: `mockFetch()` for offline practice | No network needed |

## Order to tackle

1. **returnTypes** — simplest, builds the mental model
2. **thenVsCall** — answers “why did that run now?”
3. **apiOptions** — quick wins (one property name fix)
4. **retryAndLoops** — hardest; do after the others

## Tips

- Run each function after implementing and log the result.
- For `thenVsCall` drill 3: answer in comments first, then verify by running code.
- Use `asyncDrills_mockData.js` if you want to practice without hitting the real API.
