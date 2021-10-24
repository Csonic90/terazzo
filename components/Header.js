import style from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
      <div className={style.header}>
        <div className={style.headerBorder}>
          <div className={style.logo}> 
          <div className={style.logoWrapper}>
            <h2 className={style.company}>Z.P.U.HA. TERAZZO<span className={style.dot}>.</span></h2>
            <h3 className={style.name}>Janusz Filusch</h3>
          </div>
          </div>
          <div className={style.navContainer}>
            <div className={style.navWrapper}>
                <p>Nav</p>
            </div>
          </div>
        </div>
        <div className={style.centerWordsContent}>
          <div className={style.centerWords}>
            <div className={style.centerWordsWrapper}>
                <div className={style.centerWordsItem}>SCHODY</div>
                <div className={style.centerWordsItem}>NAGROBKI</div>
                <div className={style.centerWordsItem}>PARAPERTY</div>
            </div>
          </div>
        </div>
        <div className={style.buttonHeader}> 
          <div>Zobacz Oferte</div>
          <div className={style.iconArrow}>
            <FontAwesomeIcon  icon={faArrowDown}/> 
          </div>
         
        </div>
     </div>
    )
  }