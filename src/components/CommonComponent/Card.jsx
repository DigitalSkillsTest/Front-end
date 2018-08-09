import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { title, icon, children } = props;
  const color = icon === 'plus' ? '#5AB38A' : '#E34640';
  return (
    <div className="card">
      <div className="card-head" style={{ background: '#E7E7E8' }}>
        <Icon type={icon} style={{ fontSize: 24, color, paddingRight: 10 }} />
        {title}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
};
