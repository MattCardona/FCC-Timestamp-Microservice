TimeStamp-MicroService
======================

1. A timestamp microservive project that lets you pass a string or numbers as a parameter in the url, and it will check it to see if its a unix timestamp or a natural date example (January 12, 2017).
2. If it contains one of the above, it will return both back to you.
3. If it does not contain a unix timestamp or natural date, it will return null for both properties.

Example usage:

https://timestamp-microservice-api.herokuapp.com/api/January 12 2017

https://timestamp-microservice-api.herokuapp.com/api/1484208000

https://timestamp-microservice-api.herokuapp.com/api/Jan 12 2017

https://timestamp-microservice-api.herokuapp.com/api/1 12 2017

Example output:

{"unix": 1484208000, "natural": "January 12, 2017"}

Project can be found at: https://timestamp-microservice-api.herokuapp.com
