import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Area } from './App.styles';
import { GlobalStyle } from 'styles/global';

import { CreateTaskRoutes, TaskListsRoutes } from 'routes/index';

function App() {
  return (
    <Container>
      <Area>
        <Switch>
          <Route exact path="/" component={TaskListsRoutes} />
          <Route path="/create-task" component={CreateTaskRoutes} />
        </Switch>
      </Area>
      <GlobalStyle />
    </Container>
  );
}

export default App;
