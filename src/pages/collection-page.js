import React from 'react';
import CollectionItem from '../components/collection-item';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../redux/shop/shop.selectors';

import CollectionBlock from '../styles/collection-block.styles';

function CollectionPage({ collection }) {
  console.log(collection);
  return (
    <CollectionBlock className="collection-page">
      <h2 className="title">Collection Page</h2>

    </CollectionBlock>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);