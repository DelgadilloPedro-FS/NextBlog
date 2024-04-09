import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// components/DashboardLayout.js
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar/>
        {/* UI here e.g. a header */}
        {children}
        <Footer />
      </section>
    )
  }