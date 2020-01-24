import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store/store';

class CardBag extends React.Component
{
  render()
  {
    return (
      // card panjang ada image name qty tombol + minus sub total
      <tr>
        <td class="col-sm-8 col-md-6">
          <div class="media">
            <a class="thumbnail pull-left" href={`/product/${ this.props.name }`}>
              <img
                class="media-object"
                src={this.props.image_path}
                style={{ width: '72px', height: '72px' }}
                alt=""
              />
            </a>
            <div class="media-body">
              <h4 class="media-heading" style={{ fontWeight: '600' }}>
                {this.props.name}
              </h4>
              <h5 class="media-heading">{this.props.sub_name}</h5>
            </div>
          </div>
        </td>
        <td class="col-sm-3 col-md-3">
          <div className="row">
            <input
              type="text"
              class="form-control text-center bg-white"
              id="exampleInputEmail1"
              value={this.props.qty_item}
              readOnly
            />
          </div>
          <div className="row d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={() => this.props.onClick(this.props.id, -1)}
            >
              <span class="glyphicon glyphicon-remove"></span> -
            </button>
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={() => this.props.onClick(this.props.id, 1)}
            >
              <span class="glyphicon glyphicon-remove"></span> +
            </button>
          </div>
        </td>
        <td class="col-sm-1 col-md-1 text-center">
          <strong>{this.props.sell_price}</strong>
        </td>
        <td class="col-sm-1 col-md-1 text-center">
          <strong>{this.props.sell_price * this.props.qty_item}</strong>
        </td>
        <td class="col-sm-1 col-md-1">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => this.props.onClick(this.props.id, -this.props.qty_item)}
          >
            <span class="glyphicon glyphicon-remove"></span> #
          </button>
        </td>
      </tr>
    );
  }
}
export default connect('username, password, isLogin, token', actions)(withRouter(CardBag));
