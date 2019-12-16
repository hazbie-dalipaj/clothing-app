import React, {useEffect} from 'react'
import CollectionsOverviewContainer from '../../collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import  CollectionPageContainer from '../collection/collaction.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../../redux/shop/shop-actions';

const Shop = ({fetchCollectionsStart, match}) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
       
        return(
            <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />}  />
    </div>
        )
} 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps) (Shop);