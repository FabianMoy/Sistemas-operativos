import Layout from '../components/layout/Layout';
import styles from './portfolio.module.css';
import {activities} from '../../data/portfolioData/data.js';
import ActivityCard from './components/ActivityCard';

const index = () => {
    return (
        <Layout>
            <div className={styles.portfolio_container}>
                {
                activities.map((activity)=>
                    <ActivityCard 
                        key={activity.title}
                        activity={activity}
                    />
                )   
                }
            </div>
        </Layout>
    )
}

export default index