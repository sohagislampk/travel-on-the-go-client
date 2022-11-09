import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src={'Travel On The Go.png'}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Travel On The Go
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user?.uid ?
                            <>
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}

                                    label={<Avatar alt="User settings" img={user.photoURL} rounded={true} />}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            {user.displayName}
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            {user.email}
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        Dashboard
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Settings
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >
                                        <button onClick={handleLogout}>Sign Out</button>
                                    </Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />

                            </>
                            :
                            <>
                                <div className='mr-2'>
                                    <Link to={'/login'}>
                                        <Button className='px-4' gradientMonochrome="cyan">
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                                <div className='mr-2'>

                                    <Link to={'/register'}>
                                        <Button gradientMonochrome="cyan">
                                            Register
                                        </Button></Link>
                                </div>
                            </>
                    }


                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                    <Navbar.Link href="/packages">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                    <Navbar.Link href="/addpackages">
                        Add A Tour Package
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;