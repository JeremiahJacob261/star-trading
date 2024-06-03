import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
export default function Ready() { 
    return(
        <div className="ready-bar"> 
        <p style={{ color:'whitesmoke',fontSize:'30px',fontFamily:'Open Sans, sans-serif'}}>Ready to get started?</p>
        <Link href={"https://startrading.cc/auth/user/register"}>
         <motion.div whileHover={{ y:-10 }} whileTap={{ scale:0.7}} className="readybtn">
            JOIN US NOW
        </motion.div>
        </Link>
       
        </div>
    )
}