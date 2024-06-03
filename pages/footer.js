import Linker from './linker';
import Logo from '../assets/logo.png';
import { Stack} from '@mui/material'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
    const MARKETS = [
        "Crypto Trading",
        "Stocks",
        "Forex",
        "Commodities",
        "Indices",
    ];
    const MARKETS2 = [
        "EFTs",
        "Bonds",
        "Mutual Funds",
        "Futures"
    ];
    const INVESTING = [
        "Auto Copy Trader",
        "Crypto Staking",
        "CFD Trading",
        "Listed Options"
    ];
    const ACCOUNTS = [
        "ACCOUNTS",
        "Account Tiers",
        "VIP Benefits"
    ];
    const GENERAL = [
        "Open Account",
        "Login",
        "About Us",
        "Terms and Conditions",
        "Privacy Policy"
    ];
    return (
        <div className="footer">
            <div  className="footer1">
                <Link href="/">
                <Image src={Logo} width={120} height={50} alt="logo" className="logo_home" />
                </Link>
                <p className="footer-title">Star Trading</p>
            </div>
            <div className="footer1">
                <p className="footer-title">MARKETS</p>
                {MARKETS.map((item, index) => {
                    return <p key={index} className="footer-p"><Linker>{item}</Linker></p>

                })}
            </div>
            <div className="footer1">
                {MARKETS2.map((item, index) => {
                    return <p key={index} className="footer-p"><Linker>{item}</Linker></p>

                })}
            </div>
            <div className="footer1">
                <p className="footer-title">INVESTING</p>
                {INVESTING.map((item, index) => {
                    return <p key={index} className="footer-p"><Linker>{item}</Linker></p>

                })}
            </div>
            <div className="footer1">
                <p className="footer-title">ACCOUNTS</p>
                {ACCOUNTS.map((item, index) => {
                    return <p key={index} className="footer-p"><Linker>{item}</Linker></p>

                })}
            </div>
            <div className="footer1">
                <p className="footer-title">GENERAL</p>
                {GENERAL.map((item, index) => {
                    return <p key={index} className="footer-p">{item}</p>

                })}
            </div>
            <p>Copyright © 2024  STAR Trading. All rights reserved</p>
            <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" sx={{ padding:8 }}>
            <Icon icon="ph:facebook-logo-duotone" width="24" height="24"  style={{color: '#6BCFC8'}} />
            <Icon icon="fa6-brands:square-x-twitter" width="24" height="24"  style={{color: '#6BCFC8'}} />
            <Icon icon="lets-icons:insta-duotone-line" width="24" height="24"  style={{color: '#6BCFC8'}} />
            </Stack>
        </div>

    )
}