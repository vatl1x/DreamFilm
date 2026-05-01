import MailIcon from "@/shared/assets/icons/mail.svg?react";
import GithubIcon from "@/shared/assets/icons/github.svg?react";

export const socialItems: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
    text?: string;
}> = [
    {
        label: "GitHub",
        href: "https://github.com/vatl1x",
        icon: <GithubIcon width={22} height={22} />,
    },
    {
        label: "Kinopoisk API Unofficial",
        href: "https://kinopoiskapiunofficial.tech",
        text: "API",
    },
];

export { MailIcon };
