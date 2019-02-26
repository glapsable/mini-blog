import React from 'react';
import { shallow } from 'enzyme';
import { BlogList } from '../../components/BlogList';
import posts from '../fixtures/posts';

test('should render BlogList correctly with posts', () => {
  const wrapper = shallow(<BlogList posts={posts} />);
  expect(wrapper).toMatchSnapshot();
});

test('should renders BlogList correctly with no posts', () => {
  const wrapper = shallow(<BlogList posts={[]} />);
  expect(wrapper).toMatchSnapshot();
});
