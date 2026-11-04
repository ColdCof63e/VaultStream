import { test, expect } from '@playwright/test'

test("Verify get api", async ({request}) => {
    const response = await(request.get("http://localhost:3000/api/documents/123"))
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual({id: "123", status: "Document Found!"})
})

test("Negative test case", async({request})=> {
    const crashRes = await(request.get("http://localhost:3000/api/documents/999"))
    console.log(await crashRes.text())
})