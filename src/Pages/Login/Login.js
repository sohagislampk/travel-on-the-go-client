import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="w-1/3 mx-auto my-16">
                <Card>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="Your Email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                placeholder="Your Password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Don't have an Account ?</p><Link to={'/register'}><strong className='text-cyan-500'>Register Here</strong></Link>
                        </div>
                        <Button className='bg-cyan-500' type="submit">
                            Login
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Login;