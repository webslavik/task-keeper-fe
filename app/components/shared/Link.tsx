import NextLink from 'next/link';

type Props = {
    href: string;
    type?: string;
    children: React.ReactNode;
    className?: string;
}

const LINK_TYPES = {
    link: 'link',
    button: 'button',
};

const Link = ({ href, type = LINK_TYPES.link, children, className }: Props) => {
    return (
        <NextLink href={href} className={`${className}`}>
            {children}
        </NextLink>
    );
};

export { LINK_TYPES };
export default Link;
