export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-[rgb(31,31,31)] text-white py-4">
      <div className="container mx-auto flex md:flex-row justify-around items-center">
        <p className="text-sm">© {new Date().getFullYear()} Все права защищены</p>
        <a
          href="https://github.com/DVfrontend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition"
        >
          Мой GitHub
        </a>
      </div>
    </footer>
  );
};
