# Setup (Unix systems):
- clone the repository
- install node
- install neo4j community edition (3.5.3 is stable version here)
- Inside the root directory, run ```npm install```
(ensure that neo4j-driver, express, and node-fetch are installed)
# Run:
- ```node app.js```
- In separate terminal window, launch Neo4j with ```bin/neo4j console```
- navigate to localhost:7474 to view Neo4j browser shell. Use CypherQL to observe nodes parsed directly from the Ethereum blockchain converted to a queryable graph format.
