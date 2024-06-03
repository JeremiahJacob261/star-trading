import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Headc from '../img/touch.png'
import HeaderDraw from './components/HeaderDraw';
import Ready from './components/ready';
export default function Stocks() {
    return(
            <HeaderDraw>
            <div className="App"
        style={{
          backgroundImage: `url(${Headc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
                <div className='stocker'>
                <p className='first-title'>Unrivalled Opportunities</p>
                <p className='first-p'>To Trade the Top-performing Stocks in the Global Stock Markets.</p>
                <div className="btn-case">
              <Link href="/register" style={{ textDecoration:'none',color:'white'}}>
                <motion.div className="btn-dark" whileHover={{ y: -10 }} whileTap={{ scale: 0.8 }}>Open Account</motion.div>
                </Link>

              <Link href="/register" style={{ textDecoration:'none',color:'white'}}>
                <motion.div className="btn-light" whileHover={{ y: -10 }} whileTap={{ scale: 0.8 }}>Start Trading</motion.div>
                </Link>
                </div>
                </div>
            </div>
                </HeaderDraw>
    )
}