import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <Header />
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me using the following methods:</p>
            <ul>
                <li>Personal Email: jeffreydylangreene@outlook.com</li>
                <li>School Email: jgree207@uncc.edu</li>
            </ul>
            <Footer />
        </div>
    );
}