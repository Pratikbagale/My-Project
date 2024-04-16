# Admin Dashboard API
```
POST  /v1/Admin Dashboard
```
###  Request Headers
```
Content-Type: application/json
```
## Listed Services

### Request Body
```json
{
    "Service Name":"string",
    "Description":"string",
    "Status":"string"
}
```
## Orders

### Request Body
```json
{
    "Order ID":"string",
    "Service":"string",
    "Customer":"string",
    "Date":"",
    "OrderStatus":"string"
}
```
201 - Created

Body
{
    "Message":"Service and Order listed successfully"
}

400 - Bad Request 
403 - Forbidden
404 - Not Found
500 - Internal Server Error