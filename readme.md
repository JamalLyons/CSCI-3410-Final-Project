# Simple Dog Search Algorithm

Jamal Lyons | CSCI 3410 | April 16th 2024

## Project Outline

...

## Project Structure

...

## Project Usage

...

### API Endpoints

- GET /api/search
- GET /api/search/breed
- GET /api/search/name

### Example Curl Endpoints

`curl http://localhost:8080/api/search`

`curl -X GET "http://localhost:8080/api/search/breed?breed=Labrador%20Retriever&ageFilter=5"`

`curl -X GET 'http://localhost:8080/api/search/name?name=Max'`

`curl -X GET 'http://localhost:8080/api/search?age=1'`