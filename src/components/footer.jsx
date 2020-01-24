import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store/store';
import '../style/footer.css';

class Footer extends React.Component
{
  render()
  {
    return (
      <footer class='footer-bs'>
        <div class='row'>
          <div class='col-md-3 footer-brand animated fadeInLeft'>
            <img src={require('../images/logo192.png')} alt="" />
          </div>
          <div class='col-md-4 footer-nav animated fadeInUp'>
            <h4>Our Products —</h4>
            <div class='col-md-6'>
              <ul class='pages'>
                <li>
                  <a href='/department/1'>Skin Care</a>
                </li>
                <li>
                  <a href='/department/2'>Makeup</a>
                </li>
                <li>
                  <a href='/department/3'>Hair Care</a>
                </li>
                <li>
                  <a href='/department/4'>Bath and Body</a>
                </li>
                <li>
                  <a href='/department/5'>Accressoris</a>
                </li>
              </ul>
            </div>
            <div class='col-md-6'>
              <ul class='list'>
                <li>
                  <a href='/notMatch'>About Us</a>
                </li>
                <li>
                  <a href='/notMatch'>Contacts</a>
                </li>
                <li>
                  <a href='/notMatch'>Terms & Condition</a>
                </li>
                <li>
                  <a href='/notMatch'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-md-2 footer-social animated fadeInDown'>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href='/notMatch'>Facebook</a>
              </li>
              <li>
                <a href='/notMatch'>Twitter</a>
              </li>
              <li>
                <a href='/notMatch'>Instagram</a>
              </li>
            </ul>
          </div>
          <div class='col-md-3 footer-ns animated fadeInRight'>
            <h4>Newsletter</h4>
            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
            <p>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Search for...'
                />
                <span class='input-group-btn'>
                  <button class='btn btn-default' type='button'>
                    <span class='glyphicon glyphicon-envelope'>S</span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
export default connect(
  'username, password, isLogin, token',
  actions,
)(withRouter(Footer));
