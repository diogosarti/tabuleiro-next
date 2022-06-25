import Tabuleiro from '../components/Tabuleiro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tabuleiro}>
        <Tabuleiro/> 
      </div>
    </div>
  )
}
