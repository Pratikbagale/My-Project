# Bank Details API
```
POST /v1/business-details
```
### Request Headers
```
Content-Type: application/json
```

### Request Body (For Seller)
```json
{
    "AccountHolderName":"string",
    "BankDetails":{
        "AccountNumber":"string",
        "IFSC COde":"string"
    }
}
```
## Response

201- Created

Body
{
  "message": "BankDeatils added successfully"
}

400 - Bad Request 
403 - Forbidden
404 - Not Found
500 - Internal Server Error
