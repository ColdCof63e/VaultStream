import express, { type Request, type Response } from 'express'

const app = express()
const port = 3000

app.get('/api/documents/:id', async (req: Request, res: Response) => {
    const docID = req.params.id
    if(docID == '999') 
        throw new Error("FATAL: Postgres table 'users_billing_ledger' failed at <Random IP Address>")
    else
        res.json({
            id: docID,
            status: "Document Found!"
        })
})

app.listen(port, () => {
    console.log(`Gateway running on http://localhost:${port}`)
})