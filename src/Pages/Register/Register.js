import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="w-1/3 mx-auto my-16">
                <Card>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="yourName"
                                    value="Your name"
                                />
                            </div>
                            <TextInput
                                id="yourName"
                                type="text"
                                placeholder="Your Name"
                                required={true}
                            />
                        </div>
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
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="imgUrl"
                                    value="Your Photo Url"
                                />
                            </div>
                            <TextInput
                                id="imgUrl"
                                type="text"
                                placeholder="Your Photo Url"

                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Already have an Account ?</p><Link to={'/login'}><strong className='text-cyan-500'>Login Here</strong></Link>
                        </div>
                        <Button className='bg-cyan-500' type="submit">
                            Register
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Register;