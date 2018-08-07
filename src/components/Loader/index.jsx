import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

function Loader({ isLoading }) {
  return (
    <div className="loader">
      <SyncLoader
        color="#0085C6"
        loading={isLoading}
      />
    </div>
  );
}

export default Loader;
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
