package com.jamal.task_manager;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TaskService {

    private final Map<Long, Task> taskMap = new HashMap<>();
    private long nextId = 1;

    // Get all tasks
    public List<Task> getAllTasks() {
        return new ArrayList<>(taskMap.values());
    }

    // Get a task by ID
    public Task getTaskById(long id) {
        return taskMap.get(id);
    }

    // Create a new task
    public Task createTask(Task task) {
        task.setId(nextId++);
        taskMap.put(task.getId(), task);
        return task;
    }

    // Update an existing task
    public Task updateTask(long id, Task task) {
        if (taskMap.containsKey(id)) {
            task.setId(id);
            taskMap.put(id, task);
            return task;
        }
        return null;
    }

    // Delete a task by ID
    public void deleteTask(long id) {
        taskMap.remove(id);
    }
}
