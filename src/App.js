import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import TasksPage from './Pages/TasksPage';
import AboutPage from './Pages/AboutPage';
import ErrorBoundary from './Components/ErrorBoundary';
import { TaskProvider } from './Contexts/TaskContext';
import './App.css';

const App = () => (
  <TaskProvider>
    <Router>
      <Header/>
      <main>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </Router>
  </TaskProvider>
);

export default App;
