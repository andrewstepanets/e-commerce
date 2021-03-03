import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';

import CollectionPreview from '../components/collection-preview'

import CollectionsOverviewBlock from '../styles/collections-overview.styles';


function CollectionsOverview({ collections }) {
  return (
    <CollectionsOverviewBlock className="collections-overview">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </CollectionsOverviewBlock>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);