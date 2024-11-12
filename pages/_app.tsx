// pages/_app.tsx

import '../styles/global.css'; // Import Tailwind CSS here
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
