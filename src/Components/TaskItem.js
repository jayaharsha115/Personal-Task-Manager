import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <div className={`task-item ${task.completed ? 'completed' : ''}`}>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <button onClick={() => onToggle(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default TaskItem;
