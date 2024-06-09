import React from 'react';
import useTasks from '../hooks/useTasks';
import './TasksPage.css';
import TaskForm from '../Components/TaskForm';
import TaskItem from '../Components/TaskItem';

const TasksPage = () => {
  const { tasks, dispatch } = useTasks();

  const handleAddTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const handleToggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div className="tasks-page">
      <h2>Tasks</h2>
      <TaskForm onAddTask={handleAddTask}/>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={handleToggleTask} onDelete={handleDeleteTask}/>
      ))}
    </div>
  );
};

export default TasksPage;
