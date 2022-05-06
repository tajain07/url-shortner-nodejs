# URL Shortner

### Steps to start project :

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.
```sh
cd url-shortner-nodejs
npm install
node src/server.js
``` 

### API calls

#### Create random  short url  

 ```

curl --location --request POST 'http://localhost:4445/api/links' \
--header 'Content-Type: application/json' \
--data-raw '{
    "link": "https://youtube.com"
}'
 ```
 
 #### Create custom  short url  

 ```

curl --location --request POST 'http://localhost:4445/api/links' \
--header 'Content-Type: application/json' \
--data-raw '{
    "link": "https://youtube.com",
    "code": "ytube"
}'
 ```
 
#### Get original URl from short url  

 ```
curl --location --request GET 'http://localhost:4445/api/links/G9afhv'
 ```
 
 
#### Redirect to original URl from short url  

 ```
curl --location --request GET 'http://localhost:4445/G9afhv'
 ```
