import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

// load a locale
numeral.register('locale', 'pl', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  currency: {
    symbol: 'PLN',
  },
});

// switch between locales
numeral.locale('pl');

const BlogListItem = ({
  id, title, amount, createdAt, description,
}) => (
  <Link to={`/edit/${id}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Trip amount: {numeral(amount / 100).format('0,0[.]00 $')}</p>
    <p>{moment(createdAt).format('Do MMMM YYYY')}</p>
  </Link>
);

BlogListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogListItem;
