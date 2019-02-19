import React from 'react';
import BlogSummary from './BlogSummary';
import BlogListFilters from './BlogListFilters';
import BlogList from './BlogList';

const DashboardPage = () => (
  <div>
    <BlogSummary />
    <BlogListFilters />
    <BlogList />
  </div>
);

export default DashboardPage;
