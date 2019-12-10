import React from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySenctions } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
    <div className = 'directory-menu'>
        { sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key = { id } {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySenctions
})
export default connect(mapStateToProps) (Directory);