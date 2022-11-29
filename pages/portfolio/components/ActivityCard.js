import Image from 'next/image'
import styles from './activity_card.module.css'

const ActivityCard = ({activity}) => {
 
    const {title, cover, description, document} = activity
 
    return (
        <a 
            className={styles.portfolio_activity_card}
            href={document}
            target='_BLANK'
            rel='noreferrer noopener'
        >
            <div className={styles.portfolio_activity_picture}>
                <div className={styles.portfolio_picture} >
                    <Image
                        alt='portfolio'
                        src={cover}
                        width={600}
                        height={600}
                    />
                </div>
            </div>
            <div className={styles.portfolio_activity_text}>
                <h1>
                    {title}
                </h1>
                <p> 
                    {description}
                </p>
            </div>
        </a>
    )
}

export default ActivityCard