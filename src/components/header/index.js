import React from "react"
import '../../styles/Header.css'

import GDriveLogo from '../../media/860px-Google_Drive_icon_(2020).png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from'@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const index = () => {
    return(
    <div className='header'>
        <div className="header_logo">
            <img src={GDriveLogo} alt=""/>
            <span>Drive</span>
        </div>
        <div className="header_searchContainer"></div>
        {/*
            Search Icon
            Search in Drive text
        */}
            <div className="headersearchbar"></div>
                <SearchIcon/>
                <input type='text' placeholder ='Search in Drive'/>
                <ExpandMoreIcon/>

        <div className="header_icons">
            <span>
                <HelpOutlineIcon/>
                <SettingsIcon/>

            </span>
            <img src="" alt="User Photo"/>
        </div>
    </div>

    )
}

export default index;
