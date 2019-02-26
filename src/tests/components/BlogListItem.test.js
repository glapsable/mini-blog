import React from 'react';
import { shallow } from 'enzyme';
import BlogListItem from '../../components/BlogListItem';
import posts from '../fixtures/posts';

test('should render BlogListItem with given post correctly', () => {
  const wrapper = shallow(<BlogListItem {...posts[2]} />);
  expect(wrapper).toMatchSnapshot();
});
