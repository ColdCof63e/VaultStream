# Production Scenario & Architecture Log

## Scenario 01: Global Error Handling & Async Safety
* **The Junior Approach:** Wrapping individual controller routes in `try/catch` and returning raw `err.message` strings with `500` status codes.
* **Why It Fails in Production:** Unhandled promise rejections crash the Node process; raw database errors leak table schemas to attackers; inconsistent JSON breaks frontend error boundaries.
* **The 7-Year Senior Solution:** 
  - **Node/Express:** Centralized 4-argument error-handling middleware + custom `AppError` operational class.
  - **Java Spring Boot:** `@RestControllerAdvice` + `@ExceptionHandler` returning standardized RFC-7807 Problem Details JSON.
* **Interview 1-Liner:** [To be filled after coding Phase 1]