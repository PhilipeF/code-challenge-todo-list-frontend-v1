import React from 'react';
import { Route } from 'react-router-dom';
import { TaskList } from '../pages/TaskList';
import useTasks from 'hooks/useTasks';

export const TaskListsRoutes = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <Route
      path="/"
      component={() => <TaskList tasks={tasks} onDelete={deleteTask} />}
    />
  );
};
