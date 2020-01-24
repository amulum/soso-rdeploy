import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store/store';

const OptionLoop = (props) =>
{
  return (
    <React.Fragment>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioOption" id={props.optionName} value={props.optionName} onChange={props.onChange} />
        <label class="form-check-label" for={props.optionName}>
          {props.optionName}
        </label>
      </div>
    </React.Fragment>
  );
}
export default connect('listAddress', actions)(withRouter(OptionLoop));
