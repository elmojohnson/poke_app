import "../styles/globals.css";
import { motion } from "framer-motion";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <NextNProgress height={5} color="#dc2626" options={{showSpinner: false}} />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
