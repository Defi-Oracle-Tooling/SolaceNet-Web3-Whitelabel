import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize any global services here
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading SolaceNet...</div>;
  }

  return <Component {...pageProps} />;
}
