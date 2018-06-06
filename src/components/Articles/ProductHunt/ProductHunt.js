import React from 'react';

import * as Style from '../ArticlesStyles';
import ProductHuntPane from './ProductHuntPane';

const ProductHunt = ({ paneIsActive, toggleProductHuntPane, ...rest }) => (
  <div>
    {paneIsActive && <ProductHuntPane {...rest} />}
    <Style.ArticlesText onClick={toggleProductHuntPane}>Product Hunt</Style.ArticlesText>
  </div>
);

export default ProductHunt;
