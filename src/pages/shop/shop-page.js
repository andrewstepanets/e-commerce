import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


// class ShopPage extends React.Component {

//     componentDidMount() {
//         const { fetchCollectionsStartAsync } = this.props;

//         fetchCollectionsStartAsync();
//     }

//     render() {
//         const { match, isCollectionFetching, isCollectionLoaded } = this.props
//         return (
//             <div className="shop-page">
//                 <Route
//                     exact path={`${match.path}`}
//                     render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
//                 />
//                 <Route
//                     path={`${match.path}/:collectionId`}
//                     render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
//                 />
//             </div>
//         )
//     }

// }
function ShopPage({ fetchCollectionsStart, match }) {

    useEffect(() =>
        fetchCollectionsStart(), []
    )

    return (
        <div className="shop-page">
            <Route
                exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )

}


const mapsDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapsDispatchToProps)(ShopPage);