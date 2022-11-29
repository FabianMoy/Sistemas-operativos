import Layout from '../components/layout/Layout';
import PersonalCard from './components/PersonalCard';
import { data } from '../../data/aboutData/data.js';


const index = () => {
    return (
        <Layout>
            {data.map((properties, index)=>
                <PersonalCard
                    key={index}
                    properties={properties}
                />
            )}
        </Layout>
    )
}

export default index