import Link from 'next/link';

function Footer(){

    const year = new Date().getFullYear(); // Dynamically get the current year

    return (
      <footer className="footer">
        <p>&copy; {year} Jeffrey Dylan Greene</p>
      </footer>
    );

}

export default Footer;