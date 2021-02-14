import React, { useState } from 'react';
import DirectoryMenu from 'styles/directory.styles';
import MenuItem from 'components/menu-item';
import SECTIONS_DATA from 'data/sections.data';

export function Directory() {


    return (
        <DirectoryMenu className="directory-menu">
            {SECTIONS_DATA.map(({ id, ...otherSectionProps }) => (
                <MenuItem
                    key={id}
                    {...otherSectionProps} />
            )
            )}
        </DirectoryMenu>
    )
}

export default Directory;