import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import './alert.scss';

const Alert = (props) =>
  props.alerts.length > 0 &&
  props.alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

Alert.propsTypes = {
  alerts: PropsTypes.array.isRequired,
};

export default connect(mapStateToProps)(Alert);
