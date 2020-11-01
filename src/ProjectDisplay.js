import React from "react";
import GridView from "./GridView";
import SingleView from "./SingleView";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ProjectDisplay = () => {

  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <SingleView />
      </Route>
      <Route path={match.path}>
        <GridView />
      </Route>
    </Switch>
  );
};

export default ProjectDisplay;
