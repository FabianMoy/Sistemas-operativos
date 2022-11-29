import Image from 'next/image'
import styles from './personal_card.module.css'

const PersonalCard = ({properties:{name, carer, email, phoneNumber, src,}}) => {

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_picture_container}>
                <div className={styles.card_picture_wrapper}>
                    <Image 
                        src={src} 
                        className={styles.card_picture}
                        layout='fill'
                        priority
                        alt='image'
                    />
                </div>
                <div className={styles.card_picture_wrapper}>
                    <Image 
                        src='/fime.jpg' 
                        className={styles.card_picture}
                        layout='fill'
                        priority
                        alt='image'
                    />
                </div>
            </div>
            <div className={styles.card_body}>
                <h2>
                    {name}
                </h2>
                <h4>
                    {carer}
                </h4>
                <div className={styles.card_contact}>
                    <span>
                        {email}
                    </span>
                    <span>
                        {phoneNumber}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PersonalCard