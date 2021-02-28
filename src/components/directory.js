import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory/directory.selectors';

import DirectoryMenu from '../styles/directory.styles';
import MenuItem from '../components/menu-item';

export function Directory({ sections }) {

    return (
        <DirectoryMenu className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem
                    key={id}
                    {...otherSectionProps} />
            )
            )}
        </DirectoryMenu>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);