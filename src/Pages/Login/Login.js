import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { login, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => { setError(error.message) })
            .finally(() => {
                setLoading(false)
            });
    }
    return (
        <div>
            <div onSubmit={handleLogin} className="w-1/3 mx-auto my-16">
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
                        <div className="flex items-center gap-2">
                            <p>Don't have an Account ?</p><Link to={'/register'}><strong className='text-cyan-500'>Register Here</strong></Link>
                        </div>
                        <p className='text-red-500'>{error}</p>
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