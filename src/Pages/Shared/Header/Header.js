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
                <Navbar.Brand href={'/'}>
                    <img
                        src={'Travel On The Go.png'}
                        className="mr-3 h-12 sm:h-9"
                        alt="Travel on the go logo"
                    />
                    <span className="hidden lg:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Travel On The Go
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user?.uid ?
                            <>
                                <Button onClick={handleLogout} gradientMonochrome="cyan" className='mr-4'>Sign Out</Button>
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
                    {
                        user?.uid ?
                            <>
                                <Navbar.Link href="/blog">
                                    Blog
                                </Navbar.Link>
                                <Navbar.Link href="/packages">
                                    Packages
                                </Navbar.Link>
                                <Navbar.Link href="/myreviews">
                                    My Reviews
                                </Navbar.Link>
                                <Navbar.Link href="/addpackages">
                                    Add A Tour Package
                                </Navbar.Link>
                            </>
                            :
                            <>
                                <Navbar.Link href="/blog">
                                    Blog
                                </Navbar.Link>
                                <Navbar.Link href="/packages">
                                    Packages
                                </Navbar.Link>
                            </>

                    }
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;