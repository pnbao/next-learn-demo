import Link from 'next/link'

const linkStlye = {
    marginRight : 15
};

const Header = () => (
    <div>
        <Link href='/'>
            <a style={linkStlye}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={linkStlye}>About</a>
        </Link>
    </div>
);

export default Header;
