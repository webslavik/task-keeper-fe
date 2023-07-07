'use client';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';

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
    const onSubmit = (values: any) => {
        console.log('>>> values', values);
    };

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
