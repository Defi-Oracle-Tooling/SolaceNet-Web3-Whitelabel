import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ 
  children, 
  title = 'SolaceNet Web3 Whitelabel', 
  description = 'Web3/Web4 Banking Gateway' 
}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>SolaceNet</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} SolaceNet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
