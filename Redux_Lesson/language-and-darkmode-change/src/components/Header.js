import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const {dark,language} = useSelector(state => state.site)
    return (
        <div>
            header

            <div>
                Dark Mode = {dark ? 'True':'False'}
                <br />
                Language = {language}
            </div>
        </div>

    );
}

export default Header;
