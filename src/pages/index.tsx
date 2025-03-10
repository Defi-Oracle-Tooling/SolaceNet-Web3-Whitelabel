import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [deploymentType, setDeploymentType] = useState<'single' | 'multi' | 'hybrid'>('single');

  return (
    <div className={styles.container}>
      <Head>
        <title>SolaceNet Web3 Whitelabel</title>
        <meta name="description" content="Web3/Web4 Banking Gateway" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>SolaceNet</span>
        </h1>

        <p className={styles.description}>
          A white-label Web3/Web4 banking gateway with one-click deployment
        </p>

        <div className={styles.deploymentOptions}>
          <h2>Select Deployment Type</h2>
          <div className={styles.optionsGrid}>
            <div 
              className={`${styles.card} ${deploymentType === 'single' ? styles.selected : ''}`}
              onClick={() => setDeploymentType('single')}
            >
              <h3>Single-Region</h3>
              <p>Standard Azure deployment in one location</p>
            </div>
            
            <div 
              className={`${styles.card} ${deploymentType === 'multi' ? styles.selected : ''}`}
              onClick={() => setDeploymentType('multi')}
            >
              <h3>Multi-Region</h3>
              <p>Decentralized Azure deployment in multiple locations</p>
            </div>
            
            <div 
              className={`${styles.card} ${deploymentType === 'hybrid' ? styles.selected : ''}`}
              onClick={() => setDeploymentType('hybrid')}
            >
              <h3>Hybrid</h3>
              <p>Cloud + Blockchain nodes for banking transactions</p>
            </div>
          </div>
          
          <button className={styles.deployButton}>
            Deploy to GitHub
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by SolaceNet</p>
      </footer>
    </div>
  );
}
