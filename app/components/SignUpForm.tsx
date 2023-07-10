'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';
import ErrorMessage from './shared/ErrorMessage';
import { useCreateUserMutation } from '../store/services/auth';

const SignUpSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Required'),
});

const SignUpForm = () => {
    const router = useRouter();
    const [createUser, { isSuccess, isError, error }] = useCreateUserMutation();

    const onSubmit = async (values: any) => {
        await createUser(values);
    };

    useEffect(() => {
        if (isSuccess) {
            router.push(ROUTES.home);
        }
    }, [isSuccess, router]);

    return (
        <Form initialValues={{ email: '', password: '' }} validationSchema={SignUpSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <h1 className='mb-5 text-xl'>Get started on T.K. today</h1>

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
                        Create an account
                    </Button>

                    <div>
                        Already have an account?
                        <Link href={ROUTES.home} className='ml-2'>Log in</Link>
                    </div>
                </form>
            )}
        </Form>
    );
};

export default SignUpForm;
