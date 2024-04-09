const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4 px-4 text-center">
      &copy; {new Date().getFullYear()} Pedro's Next Blog
    </footer>
  );
};
export default Footer;
