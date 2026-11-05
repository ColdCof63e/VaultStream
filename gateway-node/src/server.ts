import express, { type Request, type Response } from 'express'
import { AppError } from './utils/AppError.js'
import { globalErrorHandler } from './middleware/errorHandler.js'

const app = express()
const port = 3000

app.get('/api/documents/:id', async (req: Request, res: Response) => {
    const docID = req.params.id
    if (docID == "404")
        throw new AppError("Document with ID 404 does not exist in Vault", 404)
    else if(docID == '999') 
        throw new Error("FATAL: Postgres table 'users_billing_ledger' failed at <Random IP Address>")
    else
        res.json({
            id: docID,
            status: "Document Found!"
        })
})

app.use(globalErrorHandler)

app.listen(port, () => {
    console.log(`Gateway running on http://localhost:${port}`)
})