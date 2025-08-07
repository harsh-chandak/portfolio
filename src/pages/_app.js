import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Harsh Chandak – Full-Stack Developer | Backend Engineer</title>
        <meta name="description" content="Harsh Chandak – Full-stack developer and backend engineer specializing in Node.js, Fastify, TypeScript, PostgreSQL, and scalable systems." />
        <meta name="keywords" content="Harsh Chandak, Full Stack Developer, Backend Developer, Node.js, TypeScript, PostgreSQL, Fastify, ASU Developer, Harsh.dev, Software Engineer Portfolio, ASU, Arizona State University, Matser's, MS, MSCS, Computer Science, Web Developer, Harsh Chandak, Harsh ASU, Harsh Portfolio" />
        <meta name="author" content="Harsh Chandak" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
