import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const { register, setLoading, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userImg = form.userImg.value;


        register(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                form.reset();
                updateUserProfile(name, userImg);
                navigate('/');
            })
            .catch(error =>
                setError(error.message)
            )
            .finally(() => setLoading(false))
    }
    const updateUserProfile = (name, userImg) => {
        const profile = {
            displayName: name,
            photoURL: userImg
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => { setLoading(false) })
    }
    return (
        <div>
            <div onSubmit={handleRegister} className="w-1/3 mx-auto my-16 ">
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
                                name="name"
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
                                name="email"
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
                                name="password"
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
                                name="userImg"
                                placeholder="Your Photo Url"

                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Already have an Account ?</p><Link to={'/login'}><strong className='text-cyan-500'>Login Here</strong></Link>
                        </div>
                        <p className='text-red-500'>{error}</p>
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