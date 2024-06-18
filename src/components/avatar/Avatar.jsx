import styles from './Avatar.module.css';
import React from 'react';

export function Avatar({ src, hasBorder = true }) { 
  return (
    <div>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="profile" />
    </div>
  )
}


// hasBorder = true -> cria um default