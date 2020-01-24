import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store/store';

const OptionLoop = (props) =>
{
  return (
    <React.Fragment>
      <option value={props.optionName}>{props.optionName}</option>
    </React.Fragment>
  );
}
export default connect('listAddress', actions)(withRouter(OptionLoop));
