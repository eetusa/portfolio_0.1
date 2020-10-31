import React from "react";
import useSite from "./useSite";
import GridView from "./GridView";
import SingleView from "./SingleView";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ProjectDisplay = () => {
  // const {projectStyle} = useSite();
  // return projectStyle ? <SingleView/> : <GridView/>

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
