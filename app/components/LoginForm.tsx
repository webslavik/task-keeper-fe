'use client';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';
import ErrorMessage from './shared/ErrorMessage';
import { useLoginUserMutation } from '@/app/store/services/auth';
import { login } from '@/app/store/slices/authSlice';

const LoginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .required('Required'),
});

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loginUser, { isSuccess, isError, error }] = useLoginUserMutation();

    const onSubmit = async (values: any) => {
        const {data} = await loginUser(values);
        const accessToken = data?.access_token;

        if (accessToken) {
            dispatch(login({accessToken}));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            router.push(ROUTES.dashboard);
        }
    }, [isSuccess, router]);

    const initialValues = { email: 'test@g.com', password: '12345678qQ!' };

    return (
        <Form initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <h1 className='mb-5 text-xl'>Log in to your account</h1>

                    <Field name='email'>
                        {(props: any) => (
                            <Input {...props} type='email' label='Email' className='mb-2' />
                        )}
                    </Field>

                    <Field name='password'>
                        {(props: any) => (
                            <Input {...props} type='password' label='Password' className='mb-4' />
                        )}
                    </Field>

                    {isError && error && (
                        <ErrorMessage message={error.data.detail} className='mb-4'/>
                    )}

                    <Button type={BUTTON_TYPES.primary} className='mb-4' isSubmit>
                        Login
                    </Button>

                    <div>
                        Do not have an account?
                        <Link href={ROUTES.registration} className='ml-2'>Sign up</Link>
                    </div>
                </form>
            )}
        </Form>
    )
};

export default LoginForm;
