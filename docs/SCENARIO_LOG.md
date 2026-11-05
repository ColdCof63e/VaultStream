# Production Scenario & Architecture Log

## Scenario 01: Global Error Handling & Async Safety
* **The Junior Approach:** Wrapping individual controller routes in `try/catch` and returning raw `err.message` strings with `500` status codes.
* **Why It Fails in Production:** Unhandled promise rejections crash the Node process; raw database errors leak table schemas to attackers; inconsistent JSON breaks frontend error boundaries.
* **The 7-Year Senior Solution:** 
  - **Node/Express:** Centralized 4-argument error-handling middleware + custom `AppError` operational class.
  - **Java Spring Boot:** `@RestControllerAdvice` + `@ExceptionHandler` returning standardized RFC-7807 Problem Details JSON.
* **Interview 1-Liner:** [To be filled after coding Phase 1]

## Interview 1-Liners
* **throw new Error("FATAL: Postgres table 'users_billing_ledger' failed at <Random Address IP>")**
* - Internal errors are for server logs (Datadog/CloudWatch); external errors are for clients. Never let a raw exception cross the network boundary without being sanitized by a Global Error Handler.

* **app.get('/api/documents/:id', async (req: Request, res: Response) => { ... }). How do you handle async errors in Express?**
* - In Express 4, unhandled async rejections crash the Node process unless wrapped in a try/catch or an asyncHandler(fn) higher-order wrapper that calls next(err). Express 5 natively forwards rejected promises to the global error middleware.