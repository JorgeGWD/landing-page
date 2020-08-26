import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './tabs.css';

class TabManager extends Component {
  state = {}

  render() {
    const { activeTab, handleTab, tabs } = this.props;
    return (
        <div className="tab-manager">
            {tabs.map(({ label, value, title, text }) => (
            <div
                className={`tab ${value === activeTab ? 'selected-tab' : ''}`}
                onClick={() => { handleTab([<h3>{title}</h3>, <p>{text}</p>]); }}
                key={value}
            >
                <h3>{label}</h3>
            </div>
            ))}
        </div>
    );
  }
}

/*TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired,
};*/

export default TabManager;