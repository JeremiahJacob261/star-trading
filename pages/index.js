import { Stack } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import ROCKET from '../assets/btcrocket.png'
import Link from 'next/link'
import BTC from '../assets/btc.png'
import LOGO from '../assets/logo.png'
import Third from '../assets/third.png';
import CMobile from '../assets/mobile.png'
import ETH from '../assets/eth.png'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Landing from '../assets/landing.jpg';
import Footer from './footer.js'
function Home() {


  return (
    <main className='main'>
      <Head>
        <title>
          Star Trading
        </title>
      </Head>


      <Stack className='header' direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <div className='header-mobile'>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} style={{ width: '100%' }}>
            <Icon icon="gg:menu-round" width="35" height="35" style={{ color: "#32E875" }} />
            <Link href="/">
              <Image src={LOGO} width={110} height={40} style={{ padding: 8 }} />
            </Link>

            <Icon icon="ion:search" width="24" height="24" style={{ color: "#a3a3a3" }} />
          </Stack>
        </div>

        <div className='header-desktop'>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} style={{ width: '100%' }}>
            <Link href="/">
              <Image src={LOGO} width={110} height={40} style={{ padding: 8 }} />
            </Link>

            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"}>

            </Stack>

            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"center"}>
              <div className='sm-outlined'>
                <p>LOGIN</p>
              </div>

              <div className='sm-contained'>
                <p>REGISTER</p>
              </div>
            </Stack>

          </Stack>
        </div>


      </Stack>
      <Stack direction={"column"}
        className='page1'
        style={{
          backgroundImage: `url(${Landing})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: '90px'
        }}
      >


        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"}>

          <Image src={BTC} width={200} height={200} alt='btc' style={{ position: 'absolute', top: '200px', right: '20px', zIndex: -1 }} />
          <Image src={ETH} width={200} height={200} alt='btc' style={{ position: 'absolute', bottom: '-50px', left: '20px', zIndex: -1 }} />
          <div style={{ width: 'auto', position: 'fixed', zIndex: -2 }}>
            <Image src={Landing}
              style={{ zIndex: -2 }}
            />
          </div>
          <Stack direction={"column"} sx={{ padding: '8px' }} justifyContent={"center"} spacing={2}>
            <p className='tanding'>PROFESSIONAL CFD
              TRADING SYSTEM
            </p>
            <p className='panding'>Unlock your path to financial independence today. Engage with our offerings and master the financial markets.</p>
          </Stack>
          <div className='rocket'>
            <Image src={ROCKET} width={440} height={380} alt="rocket" />
          </div>

        </Stack>
        <Stack direction="row" spacing={5} alignItems={"center"} justifyContent={"start"} sx={{ paddingLeft: '10%' }}>
          <Link href={"https://startrading.cc/auth/user/login"} style={{ textDecoration: 'none' }}>
            <motion.div className='btn' whileHover={{ y: -4 }} whileTap={{ y: 5 }}>
              <p>LOGIN</p>
            </motion.div>
          </Link>

          <Link href={"https://startrading.cc/auth/user/register"} style={{ textDecoration: 'none' }}>
            <motion.div className='btnx' whileHover={{ y: -4 }} whileTap={{ y: 5 }}>
              <p>GET STARTED</p>
            </motion.div>
          </Link>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" style={{ width: 'auto', minHeight: '600px', marginTop: '200px', padding: '12px', background: 'whitesmoke' }}>
        <Stack direction="column">
          <p className='tanding2'>Mobile-optimized trading experience</p>
          <p className='panding2'> Never miss out on an opportunity with our mobile interface! Whenever you are not at your desktop or laptop computer, our Platform got you covered.</p>
        </Stack>
        <Image src={CMobile} alt="crypto for mobile" width={400} height={350} className='nosee' />
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" style={{ width: 'auto', minHeight: '400px', padding: '12px', background: '#0e468f' }}>
        <Stack direction="column" alignItems="center" justifyContent={"center"}>
          <p style={{ color: 'white', fontSize: '17px', textAlign: 'center' }} className='georgia'>Are You New To Trading ?</p>
          <p style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}> Never miss out on an opportunity with our best trading tutors! Whenever you are not at good with trading or have a little knowlegde, our Platform got you covered.</p>
          <Link style={{ textDecoration: 'none' }} href={"https://startrading.cc/auth/user/register"}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.8 }} className='outlined-transparent'><p>LEARN WITH US</p></motion.div>
          </Link>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" style={{ width: 'auto', minHeight: '600px', padding: '12px', background: 'whitesmoke' }}>
        <Stack direction="column">
          <Image src={Third} alt="crypto for mobile" width={340} height={350} className='see' />
          <p className='tanding2'>MANAGED PORTFOLIOS</p>
          <p className='panding2'> Our dedicated portfolio managers will expertly make investment decisions that are beneficial to you. Your needs, goals, risk tolerance and asset size have top consideration by the experts.</p>
          <p className='danding2'>Stocks ETFs Bonds Mutual Funds Futures Advanced Products</p>
        </Stack>
        <Image src={Third} alt="crypto for mobile" width={400} height={350} className='nosee' />
      </Stack>
      <Footer />
    </main>
  )
}

export default Home
