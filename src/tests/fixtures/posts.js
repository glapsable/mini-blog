import moment from 'moment';

export default [
  {
    id: 'aaa',
    title: 'aaa',
    description: 'aaa',
    amount: 0,
    createdAt: moment(0),
  }, {
    id: 'bbb',
    title: 'bbb',
    description: 'bbb',
    amount: 1500,
    createdAt: moment(0).subtract(4, 'days'),
  }, {
    id: 'ccc',
    title: 'ccc',
    description: 'ccc',
    amount: 50,
    createdAt: moment(0).add(7, 'days'),
  },
];
