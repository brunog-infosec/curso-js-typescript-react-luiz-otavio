import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading = false }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div></div>
      <span className="loader"></span>
    </Container>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
