import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeFilms from './HomeFilms';
import TimeShow from './TimeShow';
const cx = classNames.bind(styles);

function HomePage() {
    return (
        <>
            <HomeFilms />
            <TimeShow />
        </>
    );
}

export default HomePage;
