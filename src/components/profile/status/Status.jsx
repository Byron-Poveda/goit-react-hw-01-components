import React from 'react';
import PropTypes from 'prop-types';
function Status({ stats }) {
  return (
    <div className="profile__container">
      <ul className="stats">
        <li>
          <span className="stats__label">Followers </span>
          <span className="stats__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="stats__label">Views </span>
          <span className="stats__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="stats__label">Likes </span>
          <span className="stats__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Status.proptype = {
  stats: PropTypes.object,
};

export default Status;
