import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, removeTodo }) {
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo}</span>
        <div>
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  
 

function MainForm() {
    const [todos, setTodos] = useState([]);
  
    const addTodo = text => {
      const newTodos = [...todos, text];
      setTodos(newTodos);
      console.log(todos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };


    return (
        <>
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={addTodo} />
                <div>
                {todos.map((todo, index) => (
                    <Card>
                    <Card.Body>
                        <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                        />
                    </Card.Body>
                    </Card>
                ))}
                </div>
            </div>
        </>
    );
};

export default MainForm;