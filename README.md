# qp-assessment
Guide the start the application

clone the repo

Install all the dependencies using npm install

run npm start to run the application

postman curls 
 login:
 
 curl --location 'http://localhost:3001/api/groceries/login' \
--header 'Content-Type: application/json' \
--data '{"username":"Punit1234", "password":"Test1234"}'

creating the order:

curl --location 'http://localhost:3001/api/groceries/protected/order' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA' \
--header 'Content-Type: application/json' \
--data '{"groceryItems":[{ "groceryName":"Apple", "quantity":24}]}'

create the grocery:

curl --location 'http://localhost:3001/api/groceries/protected/create' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA' \
--header 'Content-Type: application/json' \
--data '{ "groceryName":"Punit", "quantity":200, "price":20 }'

getAllGroceryItems:

curl --location 'http://localhost:3001/api/groceries/protected/getAllGroceries' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA'

updateGrocery:

curl --location 'http://localhost:3001/api/groceries/protected/updateGrocery' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA' \
--header 'Content-Type: application/json' \
--data '{ "groceryName":"Apple", "price":200, "newGroceryName":20 }'

ManageInventory:

curl --location 'http://localhost:3001/api/groceries/protected/manageInventory' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA' \
--header 'Content-Type: application/json' \
--data '{ "groceryName":"20", "quantityChange":21 }'

removeGrocery:

curl --location --request DELETE 'http://localhost:3001/api/groceries/protected/removeGrocery' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0MWUyN2JlMjI2NGU3MDY2Mjc2OSIsInVzZXJuYW1lIjoiUHVuaXQxMjM0IiwiaWF0IjoxNzA5MTk0MzcxLCJleHAiOjE3MDkxOTc5NzF9.nvo-cPTYzojXHQgTx6u-Lwm19aZvVHj4Zl_xYjOFfRA' \
--header 'Content-Type: application/json' \
--data '{ "groceryName":"20"}'
