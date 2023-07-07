import NextLink from 'next/link';

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const Link = ({ href, children, className }: Props) => {
    return (
        <NextLink href={href} className={`text-indigo-500 ${className}`}>
            {children}
        </NextLink>
    )
};

export default Link;
