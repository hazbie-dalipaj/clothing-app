import React from 'react';
import { connect } from 'react-redux';
import './collection-overview.scss';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key = { id } { ...otherCollectionProps } />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateToProps) (CollectionsOverview);
