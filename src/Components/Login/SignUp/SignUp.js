import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        setError(error.message);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    sending && toast('Sending...');
    const submitValue = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        toast('Verification Email Sent');
    }
    return (
        <div>
            <div className='text-center w-75 mx-auto my-5'>
                <h1>Create an Account</h1>
            </div>
            <Container className='mt-5'>
                <Form onSubmit={submitValue} className='w-25  mx-auto border px-3 py-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" label="I agree terms and condition" />
                    </Form.Group>
                    <Button className='d-block mx-auto px-5'  variant="primary" type="submit" disabled={!checked}>
                        Sign up
                    </Button>

                    {loading && <Loading></Loading>}

                    {error && <p>{errorMessage}</p>}
                    <br />
                    Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link>
                </Form>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default SignUp;