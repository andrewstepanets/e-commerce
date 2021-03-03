import React from 'react';
import CollectionItem from '../components/collection-item';

import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop.selectors';

import CollectionBlock from '../styles/collection-block.styles';

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <CollectionBlock className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} className="collection-item" item={item} />
          ))
        }
      </div>

    </CollectionBlock>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);