# Dog Search Algorithm

Jamal Lyons | CSCI 3410 | April 16th 2024

## Project Outline

A web application that facilitates searching for dogs based on various criteria such as name, breed, and age. Technologies such as
[Next.js](https://nextjs.org/docs) and [Java Spring](https://spring.io) have been used to create a search engine for dogs.
Users interact with the application through a web interface to input their search criteria and view the search results.
The application's backend processes these search requests and retrieves relevant data from the database. The front end
displays the search results to the user in a user-friendly format.

- [The Backend](./backend/search_engine/src/main/java/project/jamal/app/) contains the java code.
- [The Frontend](./frontend/) contains the react.js code.

### Data Structure

- Entities: Dog
- Dog Attributes: Name, Breed, Age
- Relationships: Each dog has a name, and age and belongs to a specific breed

- Hashmap 

### Abstract Data Types (ADT)

- Operations: searchDogByName(), searchDogByBreed(), searchDogByAge(), etc.
- Attributes: name: string, breed: string, age: number (optional)

### Design Overview

- Frontend:
  SearchBar: Allows users to input search criteria (name, breed, age) and initiate search requests.
  DisplaySearchResults: Component to display search results to the user.

- Backend:
  SearchService: Processes search requests and retrieves data from the database.
  DatabaseService: Handles interactions with the database, such as querying for dogs based on search criteria.

- Database:
  Stores dog information, including name, breed, and age.

### API Endpoints

- GET /api/search
- GET /api/search/breed
- GET /api/search/name

## Demo Curl Endpoints

`curl http://localhost:8080/api/search`

`curl -X GET "http://localhost:8080/api/search/breed?breed=Labrador%20Retriever&ageFilter=5"`

`curl -X GET 'http://localhost:8080/api/search/name?name=Max'`

`curl -X GET 'http://localhost:8080/api/search?age=1'`
