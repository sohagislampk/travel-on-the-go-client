import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <Dropdown
                        arrowIcon={false}
                        inline={true}

                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;