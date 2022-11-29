import Layout from '../components/layout/Layout';
import styles from './home.module.css';
import Image from 'next/image'
import {data} from '../../data/homeData/data.js'

const index = () => {

    const {introduccion, historia, caracteristicas} = data;

    return (
        <Layout>
            <div>
                <section>
                    <div className={styles.home_wrapper_cover}>
                        <h1>
                            Sistemas operativos: Linux
                        </h1>
                        <Image
                            alt='Linux'
                            src='/cover.jpg'
                            width={500}
                            height={300}
                            className={styles.home_cover}
                        />
                        <div className={styles.home_hero}>
                                <h2>{introduccion.title}</h2>
                                {introduccion.body}
                                <h2>{historia.title}</h2>
                                <Image
                                    alt='torvald'
                                    src='/torvald.jpg'
                                    width={150}
                                    height={200}
                                />
                            <p>
                                {historia.body}
                            </p>
                                <h2>{caracteristicas.title}</h2>
                            <p>
                                {caracteristicas.body}
                            </p>
                                <p>
                                    {caracteristicas.body2}
                                </p>
                                <ul className={styles.list}>
                                    {caracteristicas.list.map((element, index)=>
                                        <li key={index}>{element}</li>
                                    )}
                                </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default index