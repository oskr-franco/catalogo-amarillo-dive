import React from 'react'

import styles from './Header.module.scss';

import logo from '/assets/img/logo.jpg'
import Image from '/components/atoms/image/Image.jsx';

function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" />
      <button className={styles.button} onClick={()=>{}}>JOIN</button>
    </div>
  )
}

export default Header;