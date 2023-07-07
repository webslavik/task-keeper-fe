'use client';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';

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
    const onSubmit = (values: any) => {
        console.log('>>> values', values);
    };

    return (
        <Form initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} onSubmit={onSubmit}>
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
