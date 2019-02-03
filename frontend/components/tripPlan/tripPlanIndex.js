import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTripPlans } from '../../actions/trip_plan_actions';
import DisplayCard from '../shared/displayCard/displayCard';

class TripPlanIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripPlans: {}
    };
  }

  componentDidMount() {
    this.props.getTripPlans()
      .then(response => this.setState({ tripPlans: response.tripPlans }));
  }

  renderTripPlansList() {
    const { tripPlans } = this.state;
    return _.map(tripPlans, (tripPlan, idx) => {
      return (
        <div onClick={() => this.props.history.push(`/trip-plans/${idx}/edit`)}>
          <DisplayCard
            key={idx}
            title={tripPlan.title} 
            description={tripPlan.summary}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="test">
        <h1>My Trip Plans</h1>
        <Link to="/trip-plans/new">Create new trip plan</Link>
        {this.renderTripPlansList()}
      </div>
    );
  }
}

TripPlanIndex.propTypes = {
  tripPlans: PropTypes.object,
  getTripPlans: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return {
    tripPlans: state.entities.tripPlans
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getTripPlans: () => dispatch(getTripPlans()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanIndex);
