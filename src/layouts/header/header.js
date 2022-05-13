import './sass/style.css';

function Header() {
    return (
        <header className="header">
            <small><a className="logo" href="">Logo</a></small>
            <nav>
                <div className="navbar">
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;