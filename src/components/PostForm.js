import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post ? props.post.title : '',
      amount: props.post ? (props.post.amount / 100).toString() : '',
      description: props.post ? props.post.description : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    const {
      title, description, amount, createdAt,
    } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();

    if (!title || !description) {
      this.setState(() => ({ error: 'Please fill title and description' }));
    } else {
      this.setState(() => ({ error: '' }));
      onSubmit({
        title,
        description,
        amount: amount ? parseFloat(amount) * 100 : 0,
        createdAt: createdAt.valueOf(),
      });
    }
  };

  render() {
    const {
      title, amount, description, createdAt, calendarFocused, error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Trip amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            numberOfMonths={1}
          />
          <textarea
            placeholder="Write about Your trip"
            value={description}
            onChange={this.onDescriptionChange}
          />
          <button type="submit">Add post</button>
        </form>
      </div>
    );
  }
}

PostForm.defaultProps = {
  post: null,
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
  }),
};

export default PostForm;
