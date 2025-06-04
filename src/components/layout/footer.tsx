import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mb-2 md:mb-0 text-center md:text-left"
        >
          <p className="text-base font-medium">
            ©DV product {new Date().getFullYear()}
          </p>
        </motion.div>

        <motion.div className="flex gap-6" initial="hidden" animate="visible">
          <motion.a
            href="https://github.com/DVfrontend"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            GitHub
          </motion.a>

          <motion.a
            href="mailto:daniel.vartanov81@gmail.com"
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};
