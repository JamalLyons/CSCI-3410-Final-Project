package project.jamal.app;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.List;

@Component
public class Database {

    private List<Dog> dogs;

    @Value("classpath:db.json")
    private Resource jsonFile;

    @PostConstruct
    public void init() {
        try {
            Gson gson = new Gson();
            Reader reader = new InputStreamReader(jsonFile.getInputStream());
            Type dogListType = new TypeToken<List<Dog>>(){}.getType();
            dogs = gson.fromJson(reader, dogListType);

            System.out.println("Loaded " + dogs.size() + " dogs into memory!");

            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Dog> getDogs() {
        return dogs;
    }
}