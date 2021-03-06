import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/collection-overview/collections-overview';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ updateCollections, match }) {


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const collectionRef = firestore.collection('collections')

        // fetch(`https://firestore.googleapis.com/v1/projects/${process.env.REACT_APP_FIREBASE_PROJECT_ID}/databases/(default)/documents/collections`)
        //     .then(response => response.json())
        //     .then(collections => console.log(collections))

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            setIsLoading(false);
        })
    }
    )

    return (
        <div className="shop-page">
            <Route
                exact path={`${match.path}`}
                render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />}
            />
        </div>
    )
}

const mapsDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapsDispatchToProps)(ShopPage);