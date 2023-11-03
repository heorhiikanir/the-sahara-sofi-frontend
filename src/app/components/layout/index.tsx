// import React from 'react'
import styles from './index.module.css';
import MobileHeader from './header/mobile_header';
import DesktopHeader from './header/desktop_header';

const MainLayout = () => {
  return (
    <>
      <MobileHeader />
      <div className={styles.container}>MainLayout</div>
      <DesktopHeader />
    </>
  )
}

export default MainLayout