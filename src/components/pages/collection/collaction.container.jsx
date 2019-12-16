import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../../redux/shop/shop-selectors';
import WidthSpinner from '../../../components/WithSpinner/with-spinner';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WidthSpinner
)(CollectionPage);

export default CollectionPageContainer;
