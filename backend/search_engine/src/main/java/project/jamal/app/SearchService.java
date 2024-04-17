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

    // Search a dog by its breed.
    // The age filter finds all the dogs matching this breed younger than the input age. ageFilter can be omitted.
    public List<Dog> searchDogByBreed(String breed, Integer ageFilter) {
        return searchDog(breed, ageFilter);
    }

    // Search dogs by name
    // The age filter finds all the dogs matching this breed younger than the input age. ageFilter can be omitted.
    public List<Dog> searchDogByName(String name, Integer ageFilter) {
        return searchDog(name, ageFilter);
    }

    // Search a dog.
    // Internal method used by other caller functions
    private List<Dog> searchDog(String query, Integer ageFilter) {
        List<Dog> matchingDogs = new ArrayList<>();

        for (Dog dog : this.db.getDogs()) {
            // Calculate the Levenshtein distance between the query and the dog's name or breed
            int nameDistance = levenshteinDistance(query.toLowerCase(), dog.getName().toLowerCase());
            int breedDistance = levenshteinDistance(query.toLowerCase(), dog.getBreed().toLowerCase());

            // Check if the distance is below the threshold or if the query matches exactly
            int maxDistanceThreshold = 2;
            if ((nameDistance <= maxDistanceThreshold || breedDistance <= maxDistanceThreshold) ||
                    query.equalsIgnoreCase(dog.getName()) || query.equalsIgnoreCase(dog.getBreed())) {
                // If age filter is provided, also check if the dog's age is within the filter
                if (ageFilter == null || dog.getAge() <= ageFilter) {
                    matchingDogs.add(dog);
                }
            }
        }

        return matchingDogs;
    }

    // Calculate the Levenshtein distance between two strings
    // If the distance is below the threshold or if the query matches exactly, the dog is considered a match.
    // @see - https://en.wikipedia.org/wiki/Levenshtein_distance
    private int levenshteinDistance(String s1, String s2) {
        int[][] dp = new int[s1.length() + 1][s2.length() + 1];

        for (int i = 0; i <= s1.length(); i++) {
            dp[i][0] = i;
        }

        for (int j = 0; j <= s2.length(); j++) {
            dp[0][j] = j;
        }

        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                int cost = (s1.charAt(i - 1) == s2.charAt(j - 1)) ? 0 : 1;
                dp[i][j] = Math.min(Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1), dp[i - 1][j - 1] + cost);
            }
        }

        return dp[s1.length()][s2.length()];
    }
}