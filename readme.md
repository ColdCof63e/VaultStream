# Vault Stream
## Enterprise Document and Notification Engine

**Polyglot Architecture:**
* ***Frontend:*** React + TypeScript (Tested with Playwright)
* ***API Gateway/Core Services:*** Node.js + Express.js (TypeScript)
* ***Billing/Ledger Service:*** Java Spring Boot
* ***Async Notification Worker:*** Python (Tested with Pytest)

### Distributed Document Vault

### Billing Ledger 
### Event-Driven Notification Engine.

### System Architecture Design
[```React Client] 
   ├── (1. Request Presigned URL) ──> [Node/Express Gateway] <── (Saga Tx) ──> [Spring Boot Billing]
   └── (2. Direct 2GB PUT Upload) ──> [S3 / MinIO Storage]
                                             │
                                      (3. S3 Event)
                                             ▼
                                   [Redis / Message Queue] ──> [Python Notification Worker]```

#### Production Scenarios
* Global Error Handling
* S3 Presigned URLs
* Async Queue + Idempotency
* DB Indexing + Locking
* Saga pattern
* Automated Playwright/Pytest Pipeline