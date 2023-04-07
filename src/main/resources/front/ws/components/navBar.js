import Link from 'next/link';
import navStyle from '../styles/Navbar.module.css'

export default function NavBar() {

    const menuItems = ['Home', 'Verify']


    return (
        <nav className={navStyle.navbarStyle}>
            <div>Logo</div>
            <ul className={navStyle.navUl}>
                {menuItems.map(item => <li key={item}><Link href="/" className={navStyle.navItem}>{item}</Link></li>)}
            </ul>
            <ul className={navStyle.navUl}>
                <li><Link href="/" className={navStyle.navItem}>Profile</Link></li>
                <Link className={navStyle.signOut} href="/">Sign out</Link>
            </ul>
        </nav>
    );
}