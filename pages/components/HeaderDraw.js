import React from 'react';
import { Drawer, Stack, FormControl, OutlinedInput, InputAdornment, FormHelperText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import Ready from './ready';
import LOGO from '../../assets/logo.png';
import Footer from '../footer';
import Link from "next/link";
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
            <Link className="linkers" href={'/' + children.replace(' ', '').replace(' ', '').toLowerCase()}>
                <p style={{ width: '100%', padding: 0, height: '50px', margin: 0 }}>{children}</p>
            </Link>
        )
    }

    return (
        <main className='main'>
            <Stack className='header' direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Image src={LOGO} width={110} height={40} style={{ padding: 8 }} />


            </Stack>
            {children}
            <Ready />
            <Footer />
        </main>
    )
}