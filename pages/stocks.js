import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Headc from '../assets/touch.png'
import HeaderDraw from './components/HeaderDraw';
import Ready from './components/ready';
import Image from 'next/image';
export default function Stocks() {
    return(
      
    <main className='main'>
            <HeaderDraw>
            <div className="App"
       >
        <div style={{ width: '100vw', maxHeight: '600px', position: 'fixed', zIndex: -10 }}>
        <Image src={Headc} />
      </div>
                <div className='stocker'>
                <p className='first-title'>Unrivalled Opportunities</p>
                <p className='first-p'>To Trade the Top-performing Stocks in the Global Stock Markets.</p>
                <div className="btn-case">
              <Link href={"https://startrading.cc/auth/user/register"} style={{ textDecoration:'none',color:'white'}}>
                <motion.div className="btn-dark" whileHover={{ y: -10 }} whileTap={{ scale: 0.8 }}>Open Account</motion.div>
                </Link>

              <Link href={"https://startrading.cc/auth/user/register"} style={{ textDecoration:'none',color:'white'}}>
                <motion.div className="btn-light" whileHover={{ y: -10 }} whileTap={{ scale: 0.8 }}>Start Trading</motion.div>
                </Link>
                </div>
                </div>
            </div>
                </HeaderDraw>
                </main>
    )
}