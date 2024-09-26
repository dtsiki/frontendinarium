import Image from 'next/image';

import kesha from './../../../public/assets/kesha.jpg';

export default function About() {
    return (
        <div className="section">
            <h1 className="title is-1 mb-4">О проекте</h1>
            <p className="mb-4">
                Жила-была однажды одна фронтенд-разработчица.
                Однажды ей захотелось иметь такое местечко, где она могла бы хранить все-привсе свои несметные богатства.
                А точнее все свои знания по фронтенд-разработке.
                Так родился Фронтендинариум.
            </p>
            <p className="mb-4">
                В Фронтендинариуме вы найдёте знания по HTML, CSS, JavaScript, TypeScript, React и многое-многое другое.
            </p>
            <p className="mb-4">
                Проект реализован с помощью React-фреймворка Next.js и сss-фреймворка Bulma.
            </p>
            <Image
                src={kesha}
                width="300"
                height="300"
                alt='Счастливая собака породы корги лежит на траве с полевыми цветами, на фоне пейзаж из голубого неба, холмов и небольшого пруда' />
        </div>
    );
}