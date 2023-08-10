import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ListGroup, FormControl, InputGroup } from 'react-bootstrap';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:8080/api/v1/task');
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post('https://localhost:8080/api/v1/task', newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete('https://localhost:8080/api/v1/task', { data: { id } });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Task title"
          value={newTask.title}
          onChange={e => setNewTask({ ...newTask, title: e.target.value })}
        />
        <FormControl
          placeholder="Task description"
          value={newTask.description}
          onChange={e => setNewTask({ ...newTask, description: e.target.value })}
        />
        <Button variant="primary" onClick={addTask}>Add Task</Button>
      </InputGroup>
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
