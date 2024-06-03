import React from 'react';
import { Drawer, Stack, FormControl, OutlinedInput, InputAdornment, FormHelperText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';

import Ready from './ready';
import Logo from '../../assets/logo.png';
import Footer from '../footer';
import  Link from "next/link";
import { useState, useEffect } from 'react';
export default function HeaderDraw({ children }) {
    const [open, setOpen] = useState(false);
    const handleDrawer = () => { setOpen(!open) }
    const MARKETS = ['Stocks', 'ETFs', 'Bonds', 'Mutual Funds', 'Futures'];
    const PLATFORM = ['Platform Overview'];
    const INVESTING = ['Auto copy Trader', 'Crypto staking', 'CDF Trading', 'Listed Options'];
    const ACCOUNTS = ['Account Tiers', 'VIP benefits'];
    const OFFERS = ['Invest in Bitcoin', 'Invest in Tesla'];
    useEffect(() => {
        console.log(MARKETS);
        
    }, [open]);
    const dropdownData = {
        MARKETS: { items: ['Stocks', 'ETFs', 'Bonds', 'Mutual Funds', 'Futures'], isVisible: false },
        PLATFORM: { items: ['Platform Overview'], isVisible: false },
        INVESTING: { items: ['Auto copy Trader', 'Crypto staking', 'CDF Trading', 'Listed Options'], isVisible: false },
        ACCOUNTS: { items: ['Account Tiers', 'VIP benefits'], isVisible: false },
        OFFERS: { items: ['Invest in Bitcoin', 'Invest in Tesla'], isVisible: false },
        ABOUT: { items: ['Contact', 'About US', 'Privacy Policy', 'Terms and Conditions'], isVisible: false },
    };

    const [dropdownVisibility, setDropdownVisibility] = useState(dropdownData);

    const handleMouseEnter = (dropdownKey) => {
        setDropdownVisibility(prevState => ({ ...prevState, [dropdownKey]: { ...prevState[dropdownKey], isVisible: true } }));
    };

    const handleMouseLeave = (dropdownKey) => {
        setDropdownVisibility(prevState => ({ ...prevState, [dropdownKey]: { ...prevState[dropdownKey], isVisible: false } }));
    };
    function Linker({ children }) {
        return (
            <Link className="linkers" to={'/' + children.replace(' ', '').replace(' ', '').toLowerCase()}>
                <p style={{ width: '100%', padding: 0, height: '50px', margin: 0 }}>{children}</p>
            </Link>
        )
    }

    return (
        <div>
            <Drawer open={open} onClose={handleDrawer}>
                <div className="drawerdiv">
                    <Stack direction="column" spacing={2}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>}
                                label="Search"
                                aria-describedby="outlined-weight-helper-text"

                            />
                            <FormHelperText id="outlined-weight-helper-text">Search</FormHelperText>
                        </FormControl>

                        <Divider />
                        <Link to='/' className='linkers'>
                            <div className="pagelnk">
                                <p className="top-p">HOME</p>
                            </div>
                        </Link>
                        {Object.keys(dropdownData).map(dropdownKey => (
                            <div key={dropdownKey} onMouseEnter={() => handleMouseEnter(dropdownKey)} onMouseLeave={() => handleMouseLeave(dropdownKey)}>

                                <div className="pagelnk">
                                    <p className="top-p">{dropdownKey}</p>
                                    <KeyboardArrowRightIcon color="grey" sx={{ color: 'grey' }} />
                                </div>
                                {dropdownVisibility[dropdownKey].isVisible && (
                                    <ul className="dropdown">
                                        {dropdownData[dropdownKey].items.map((item, index) => (
                                            <li key={index}><Linker>{item}</Linker></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                        <Link to="/login">
                            <div className="top-btn-dark">
                                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className="">LOGIN</p>
                                </Link>
                            </div>
                        </Link>
                        <Link to="/register">
                            <div className="top-btn-light">
                                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className="top-p">REGISTER</p>
                                </Link>
                            </div>
                        </Link>

                    </Stack>
                </div>
            </Drawer>


            <div className="top-nav">
                <div className="menu">
                    <MenuIcon color="white" sx={{ color: 'white', width: '25px' }} onClick={handleDrawer} />
                </div>

                <Link to='/'>
                    <img src={Logo} alt="logo" className="logo_home" />
                </Link>
                <div className="top-pages">
                    <Stack direction="row" spacing={2}>
                        {Object.keys(dropdownData).map(dropdownKey => (
                            <div key={dropdownKey} onMouseEnter={() => handleMouseEnter(dropdownKey)} onMouseLeave={() => handleMouseLeave(dropdownKey)}>

                                <div className="pagelnk">
                                    <p className="top-p">{dropdownKey}</p>
                                    <KeyboardArrowDownIcon color="white" sx={{ color: 'white' }} />
                                </div>
                                <div className="floating">
                                    {dropdownVisibility[dropdownKey].isVisible && (
                                        <ul className="dropdown">
                                            {dropdownData[dropdownKey].items.map((item, index) => (
                                                <li key={index}><Linker>{item}</Linker></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>


                            </div>
                        ))}

                        <Link to="/login">
                            <div className="top-btn-dark">
                                <p className="">LOGIN</p>
                            </div>
                        </Link>
                        <Link to="/register">
                            <div className="top-btn-light">
                                <p className="top-p">REGISTER</p>
                            </div>
                        </Link>
                    </Stack>
                </div>

                <div className="menu">
                    <SearchIcon color="white" sx={{ color: 'grey', width: '25px' }} />
                </div>
            </div>
            <div className='AppConver'>

                {children}
            </div>
            <Ready />
            <Footer />
        </div>
    )
}