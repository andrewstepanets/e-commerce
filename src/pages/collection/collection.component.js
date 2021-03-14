import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';


import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

function CollectionPage({ collection }) {

  // This is an example of using useEffect instead ComponentWillUnmount()
  // useEffect(() => {

  //   console.log(`I'm subscribing`);

  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))

  //   return () => {
  //     console.log(`I'm unsubscribing`);
  //     unsubscribeFromCollections()
  //   }
  // }, [])

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => (
            <CollectionItem key={item.id} className="collection-item" item={item} />
          ))
        }
      </CollectionItemsContainer>

    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);