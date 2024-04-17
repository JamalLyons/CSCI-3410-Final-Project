package project.jamal.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jamal.app.utils.Dog;
import project.jamal.app.utils.Database;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    private final Database db;

    @Autowired
    public SearchService(Database db) {
        this.db = db;
    }

    public List<Dog> getAllDogs() {
        return this.db.getDogs();
    }

    public List<Dog> searchDogByBreed(String breed, Integer ageFilter) {
        return searchDog(breed, ageFilter);
    }

    // Search dogs by name
    public List<Dog> searchDogByName(String name, Integer ageFilter) {
        return searchDog(name, ageFilter);
    }

    // Search a dog.
    // Internal method used by other caller functions
    private List<Dog> searchDog(String query, Integer ageFilter) {
        List<Dog> matchingDogs = new ArrayList<>();

        for (Dog dog : this.db.getDogs()) {
            // Check if the dog's name or breed contains the query string (case-insensitive)
            // and if the age is less than or equal to the filter (if provided)
            if ((query == null || dog.getName().toLowerCase().contains(query.toLowerCase()) ||
                    dog.getBreed().toLowerCase().contains(query.toLowerCase())) &&
                    (ageFilter == null || dog.getAge() <= ageFilter)) {
                matchingDogs.add(dog);
            }
        }

        return matchingDogs;
    }
}