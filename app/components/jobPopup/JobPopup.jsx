import React from 'react';
import styles from './JobPopup.module.css';
import { Inter } from 'next/font/google';

import IMG1 from '/public/images/image1.png'

const mockData =
{
  title: 'Skellefteå taxi',
  subtitle: 'Taxichaufför',
  desc: 'Du är en serviceinriktad person som trivs med att möta och samarbeta med nya människor. Du sätter en stor heder i punktlighet och är stolt över att vara en duktig förare. Säkerheten för dina passagerare och dina medtrafikanter är självklart i första rummet när du planerar och genomför dina körningar. Både dina kollegor och de du möter i yrket skulle beskriva dig som en utåtriktad och lösningsorienterad person som inte tvekar att hjälpa till.',
  salery: '34000',
  empType: 'Tillsvidareanställning',
  id: 1,
  img: IMG1,
};
function JobPopup(props) {
  const handleClose = () => {
    props.onClose();
  };
  const handleApply = () => {
    //
  };
  return (
    <div className={styles.box}>
      <button className={styles.close} onClick={handleClose}>X</button>
      <div className={styles.title}>        
      <h1>{mockData.title}</h1>
      <h2 className={styles.subtitle}>{mockData.subtitle}</h2>
      </div>
      <div style={{ fontSize: '1em', whiteSpace: 'pre-line' }}>
      {'\n'}
      <b className={styles.bold}>Arbetsbeskrivning{'\n'}</b>
        {mockData.desc}
        {'\n\n'}
        <b className={styles.bold}>Lön</b>{'\n'}
        {mockData.salery} kr
        {'\n\n'}
        <b className={styles.bold}>Anställningsform{'\n'}</b>
        {mockData.empType}{'\n\n'}
      </div>
      <button className={styles.applyButton} onClick={handleApply}>
        <span>Ansök här</span>
        <span>&rarr;</span>
      </button>
    </div>
  );
}
export default JobPopup;