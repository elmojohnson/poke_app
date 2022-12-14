import "../styles/globals.css";
import Layout from "../layouts/main/Layout";
import { motion } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
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
        <NextNProgress height={5} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
