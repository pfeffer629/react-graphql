import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default ({children}) => {
  return <div className="container">{children}</div>;
};