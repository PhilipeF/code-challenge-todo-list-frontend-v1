import React from 'react';
import { Route } from 'react-router-dom';
import { CreateTask } from 'pages/CreateTask';

export const CreateTaskRoutes = () => {
  return <Route path="/create-task" component={() => <CreateTask />} />;
};
