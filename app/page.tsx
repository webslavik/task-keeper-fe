import LoginForm from './components/LoginForm';
import ContentSection from './components/shared/ContentSection';

export default function Home() {
    return (
        <ContentSection className='w-96 mt-52 mx-auto'>
            <LoginForm />
        </ContentSection>
    )
};
