import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate,
} from '../actions/filters';

class BlogListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onTextChange = (e) => {
    const { setTextFilterDispatch } = this.props;
    setTextFilterDispatch(e.target.value);
  };

  onSortChange = (e) => {
    const { sortByDateDispatch, sortByAmountDispatch } = this.props;
    const { value } = e.target;
    if (value === 'date') sortByDateDispatch();
    if (value === 'amount') sortByAmountDispatch();
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDateDispatch, setEndDateDispatch } = this.props;
    setStartDateDispatch(startDate);
    setEndDateDispatch(endDate);
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({ calendarFocused: focusedInput }));
  };

  render() {
    const { filters } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Search posts"
          value={filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">By date</option>
          <option value="amount">By amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          startDateId="startDateFilter"
          endDate={filters.endDate}
          endDateId="endDateFilter"
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
          showDefaultInputIcon
        />
      </div>
    );
  }
}

BlogListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.string,
    startDate: PropTypes.object,
    endDate: PropTypes.object,
  }).isRequired,
  setStartDateDispatch: PropTypes.func.isRequired,
  setEndDateDispatch: PropTypes.func.isRequired,
  setTextFilterDispatch: PropTypes.func.isRequired,
  sortByDateDispatch: PropTypes.func.isRequired,
  sortByAmountDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilterDispatch: text => dispatch(setTextFilter(text)),
  sortByDateDispatch: () => dispatch(sortByDate()),
  sortByAmountDispatch: () => dispatch(sortByAmount()),
  setStartDateDispatch: startDate => dispatch(setStartDate(startDate)),
  setEndDateDispatch: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters);
