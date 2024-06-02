import { Stack } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import ROCKET from '../assets/btcrocket.png'
import BTC from '../assets/btc.png'
import LOGO from '../assets/logo.png'
import ETH from '../assets/eth.png'
import { motion } from 'framer-motion'
import Landing from '../assets/landing.jpg';

function Home() {


  return (
    <main className='main'>
      <div style={{ width: '100vw', maxHeight: '100vh', position: 'fixed', zIndex: -10 }}>
        <Image src={Landing} />
      </div>
      <Image src={BTC} width={200} height={200} alt='btc' style={{ position: 'fixed', top: '200px',right:'20px', zIndex: -1 }} />
      <Image src={ETH} width={200} height={200} alt='btc' style={{ position: 'fixed', bottom: '-50px',left:'20px', zIndex: -1 }} />
     
      <Stack direction={"column"}
        style={{
          backgroundImage: `url(${Landing})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Stack className='header' direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Image src={LOGO} width={140} height={70} style={{ padding: 8 }} />


        </Stack>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
          <Stack direction={"column"} sx={{ padding:'8px'}} justifyContent={"center"} spacing={2}>
            <p className='tanding'>PROFESSIONAL CFD
              TRADING SYSTEM
            </p>
            <p className='panding'>Unlock your path to financial independence today. Engage with our offerings and master the financial markets.</p>
          </Stack>
          <div className='rocket'>
            <Image src={ROCKET} width={440} height={380} alt="rocket" />
          </div>

        </Stack>
        <Stack direction="row" spacing={5} alignItems={"center"} justifyContent={"start"} sx={{ paddingLeft:'10%'}}>
            <motion.div className='btn' whileHover={{ y:-4 }} whileTap={{ y: 5 }}>
              <p>LOGIN</p>
            </motion.div>

            <motion.div className='btnx' whileHover={{ y:-4 }} whileTap={{ y: 5 }}>
              <p>GET STARTED</p>
            </motion.div>
        </Stack>
      </Stack>
    </main>
  )
}

export default Home
