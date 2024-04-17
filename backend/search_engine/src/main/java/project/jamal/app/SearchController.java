package project.jamal.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/search")
@CrossOrigin
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping
    public ResponseEntity<List<Dog>> getAllDogs() {
        List<Dog> dogs = searchService.getAllDogs();
        return new ResponseEntity<>(dogs, HttpStatus.OK);
    }

    @GetMapping("/breed")
    public ResponseEntity<List<Dog>> searchDogByBreed(@RequestParam(required = true) String breed, @RequestParam(required = false) Integer ageFilter) {
        List<Dog> dogs = searchService.searchDogByBreed(breed, ageFilter);
        return new ResponseEntity<>(dogs, HttpStatus.OK);
    }

    @GetMapping("/name")
    public ResponseEntity<List<Dog>> searchDogByName(@RequestParam(required = true) String name, @RequestParam(required = false) Integer ageFilter) {
        List<Dog> dogs = searchService.searchDogByName(name, ageFilter);
        return new ResponseEntity<>(dogs, HttpStatus.OK);
    }
}
