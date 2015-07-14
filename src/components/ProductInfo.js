/*global __CLIENT__*/
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux/react';
import * as productActions from '../actions/productActions';
if (__CLIENT__) {
  require('./Product.scss');
}

class ProductInfo {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const {product, load} = this.props;
    const priceSet = product.priceSet[0];
    return (
      <div className="product-container">
        <img src={"http://ak1.ostkcdn.com/images/products/"+product.imageMedium1} alt="" />
        <div className="product-main-info">
            <strong className="product-name">{product.name}</strong>
            <div className="product-price-container">
                <span className="price-label">{priceSet.label}</span>
                <span className="price-formatted">{priceSet.formattedPrice}</span>
            </div>
        </div>
      </div>
    );
  }
}

@connect(state => ({
  product: state.product.data
}))
export default class ProductContainer {
  static propTypes = {
    info: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render() {
      console.log(this.props.product);
    const { product, dispatch } = this.props;
    return <ProductInfo product={product} {...bindActionCreators(productActions, dispatch)}/>;
  }
}
