import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>Harsh Chandak – Full-Stack Developer | Backend Engineer</title>
        <meta name="description" content="Full-stack developer and backend engineer specializing in Node.js, Fastify, TypeScript, PostgreSQL, and scalable systems." />
        <meta name="keywords" content="Harsh Chandak, Full Stack Developer, Backend Engineer, Node.js, Fastify, TypeScript, PostgreSQL, ASU Developer, Software Engineer Portfolio" />
        <meta name="author" content="Harsh Chandak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Canonical */}
        <link rel="canonical" href="https://harsh-portfolio.vercel.app" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Harsh Chandak – Full-Stack Developer | Backend Engineer" />
        <meta property="og:description" content="Explore the portfolio of Harsh Chandak – a full-stack and backend engineer building scalable products with Node.js, TypeScript, and more." />
        <meta property="og:image" content="https://harsh-portfolio.vercel.app/banner.png" />
        <meta property="og:url" content="https://harsh-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Harsh Chandak Portfolio" />

        {/* Theme Color (mobile browser) */}
        <meta name="theme-color" content="#1e1e1e" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
