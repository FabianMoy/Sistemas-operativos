import Head from 'next/head';
import PageTransition from '../../../animations/PageTransition/PageTransition';
import Footer from './Footer/Footer';
import MainNavbar from './MainNavbar/MainNavbar';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { homecontainer } from '../../../animations/PageTransition/animations';


const Layout = ({children}) => {
    
    const {asPath} = useRouter();

    return (
        <>
            <Head>
                <title>Sistemas operativos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Equipo 2"/>
                <meta name="keywords" content={`FIME, sistemas operativos, equipo 2, actividades, PIA`}/>
                <meta property="og:description" content="This is our final proyect"/>
                <meta property="og:title" content="Equipo 2"/>
                <meta property="og:site_name" content="Sistemas Operativos PIA"/>
            </Head>
            <div className='root'>
                <MainNavbar/>
                <PageTransition>
                    <main>
                        <motion.div
                            key={asPath}
                            variants={homecontainer}
                            initial='hidden'
                            animate='show'
                            exit='hide'
                        >
                            {children}
                        </motion.div>
                    </main>
                </PageTransition>
                <Footer/>
            </div>
        </>
    )
}

export default Layout