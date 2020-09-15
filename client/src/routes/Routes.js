import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import AddIssue from "../components/AddIssue";
import IssueList from "../components/IssueList";
import EditIssue from "./../components/EditIssue";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/add-issue" component={AddIssue} />
          <Route exact path="/edit-issue" component={EditIssue} />
          <Route exact path="/page/:pageNumber" component={IssueList} />
          <Redirect to="/page/1" component={IssueList}></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
