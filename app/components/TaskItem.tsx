'use client';
import { useRouter } from 'next/navigation';
import ContentSection from '@/app/components/shared/ContentSection';
import Text from '@/app/components/shared/Text';
import { ROUTES } from '@/app/constants';

type Props = {
    id: number;
    title: string;
    description?: string;
    completed?: boolean;
    className?: string;
}

const TaskItem = ({ id, title, className = '' }: Props) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`${ROUTES.dashboard}/${id}`);
    };

    return (
        <ContentSection className={`px-2 py-2 cursor-pointer ${className}`} onClick={onClick}>
            <Text>{id} - {title}</Text>
        </ContentSection>
    );
};

export default TaskItem;
