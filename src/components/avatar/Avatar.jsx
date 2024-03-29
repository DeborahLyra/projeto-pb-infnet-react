import styles from './Avatar.module.css'

export function Avatar({ src, hasBorder = true }) { 
  return (
    <div>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} hasBorder = {hasBorder} alt="profile" />
    </div>
  )
}


// hasBorder = true -> cria um default