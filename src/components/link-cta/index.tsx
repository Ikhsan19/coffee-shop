import Link from 'next/link';

type Props = {
    href: string;
    classname?: string;
    text: string;
}

const LinkCTA = ({ href, classname = '', text }: Props) => {
    return (
        <Link href={href} className={classname}>{text}</Link>
    )
}

export default LinkCTA