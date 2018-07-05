### NodeJS/Express PostgreSQL connection with pg-promise

- Connect your express server to a cloud based postgres db 

##### HOW TO:

1.  Clone this repo
2.  Create a `.env` file with

```
PORT=XXXX
DB_URI=postgres://XXXXXX:XXXXXXXXX@XXXX.XXX:5432/XXXXXX
```
  > You will need a DB_URI connection to a Cloud PostgreSQL hosting service 

Then you need to create a table in your postgres cloud hosting with the following SQL query

```
CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)
```

Then run

```
npm start
```

See the results in your local terminal and the web hosting console


-enjoy