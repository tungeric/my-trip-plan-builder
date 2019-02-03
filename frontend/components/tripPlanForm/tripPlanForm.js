import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getTripPlan, createTripPlan, updateTripPlan } from '../../actions/trip_plan_actions';
import { createDay } from '../../actions/day_actions';
import DisplayCard from '../shared/displayCard/displayCard';

class TripPlanForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.trip_plan_id),
      title: "",
      summary: "",
      days: [],
      addingDay: false,
      dayTitle: "",
      dayDescription: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddDay = this.handleAddDay.bind(this);
    this.toggleAddDay = this.toggleAddDay.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    const { propsGetTripPlan } = this.props;
    if (id) {
      propsGetTripPlan(id)
        .then(response => {
          this.setState({ 
            title: response.tripPlan.title, 
            summary: response.tripPlan.summary,
            days: response.tripPlan.days });
        });
    }
  }

  toggleAddDay() {
    const { addingDay } = this.state;
    this.setState({ addingDay: !addingDay });
  }

  handleSubmit(event) {
    const { propsUpdateTripPlan, propsCreateTripPlan } = this.props;
    const { id, title, summary } = this.state;
    event.preventDefault();
    if (id) {
      propsUpdateTripPlan({ trip_plan: { id, title, summary }})
        .then(() => {
          this.props.history.push(`/trip-plans/`);
        });
    } else {
      propsCreateTripPlan({ trip_plan: { title, summary }})
        .then(() => {
          this.props.history.push(`/trip-plans/`);
        });
    }
  }

  handleAddDay(event) {
    const { propsCreateDay } = this.props;
    const { id, dayTitle, dayDescription } = this.state;
    propsCreateDay({ day: { title: dayTitle, description: dayDescription, trip_plan_id: id }})
      .then(() => window.location.reload());
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  renderDayList() {
    const { days } = this.state;
    return _.map(days, (day, idx) => {
      return (
        <div>
          <DisplayCard
            key={idx}
            title={day.title}
            description={day.description}
          />
        </div>
      );
    });
  }

  renderAddDay() {
    const { addingDay } = this.state;
    let content = <div className="add-days-button" onClick={this.toggleAddDay}>Add a Day</div>
    if (addingDay) {
      content = (
        <div>
          <h3>Add a day</h3>
          <form onSubmit={this.handleAddDay}>
            <label htmlFor="textInput">Title: </label>
            <div className="day-form">
              <input className="title" type="text"
                onChange={this.update("dayTitle")}
                value={this.state.dayTitle} />
              <label htmlFor="textInput">Description: </label>
              <textarea className="text-area"
                onChange={this.update("dayDescription")}
                value={this.state.dayDescription} />
              <input className="button" type="submit" value="Add day" />
            </div>
          </form>
        </div>
      );
    }
    return content;
  }

  render() {
    const { id } = this.state;
    let title = "Add a New Plan";
    if (id) {
      title = "Edit Trip Plan";
    }
    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="trip-plan-form">
            <label htmlFor="textInput">Title: </label>
            <input className="title" type="text" 
                  onChange={this.update("title")}
                  value={this.state.title} />
            <label htmlFor="textInput">Summary: </label>
            <textarea className="text-area"
                  onChange={this.update("summary")}
                  value={this.state.summary} />
            <input className="button" type="submit" value="Edit" />
          </div>
        </form>
        {id ? this.renderDayList() : <div />}
        {id ? this.renderAddDay() : <div />}
        <Link to="/trip-plans">Back to Trip Plan List</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    tripPlans: state.entities.tripPlans
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  propsGetTripPlan: (id) => dispatch(getTripPlan(id)),
  propsCreateDay: (id) => dispatch(createDay(id)),
  propsUpdateTripPlan: (tripPlan) => dispatch(updateTripPlan(tripPlan)),
  propsCreateTripPlan: (tripPlan) => dispatch(createTripPlan(tripPlan)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanForm);
