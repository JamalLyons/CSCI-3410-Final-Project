package project.jamal.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jamal.app.utils.Dog;
import project.jamal.app.utils.Database;

import java.util.List;

@Service
public class SearchService {

    private final Database db;

    @Autowired
    public SearchService(Database db) {
        this.db = db;
    }

    public List<Dog> getDogResources() {
        return this.db.getDogs();
    }
}