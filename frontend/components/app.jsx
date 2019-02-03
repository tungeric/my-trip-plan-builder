import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import TripPlanForm from './tripPlanForm/tripPlanForm';
import TripPlanIndex from './tripPlan/tripPlanIndex';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={TripPlanIndex} />
          <Route exact path="/trip-plans" component={TripPlanIndex} />
          <Route exact path="/trip-plans/new" component={TripPlanForm} />
          <Route exact path="/trip-plans/:trip_plan_id/edit" component={TripPlanForm} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

