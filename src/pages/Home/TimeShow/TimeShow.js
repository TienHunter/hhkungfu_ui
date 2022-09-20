import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TimeShow.module.scss';
import * as filmService from '~/apiService/filmService';
import Films from '~/layouts/components/Films';
import Paginate from '~/layouts/components/Paginate';
import Tilte from '~/components/Title';
const cx = classNames.bind(styles);
function TimeShow() {
    const [times, setTimes] = useState([]);
    const [films, setFilms] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [timeID, setTimeID] = useState('');
    useEffect(() => {
        const fetchTimes = async () => {
            const res = await filmService.getshowtimes();
            setTimes(res);
            setTimeID(res[0].keyMap);
        };
        fetchTimes();
    }, []);
    useEffect(() => {
        const fetchFilms = async () => {
            const res = await filmService.getFilmsByTimeID(timeID);
            setFilms(res);
        };
        fetchFilms();
    }, [timeID]);
    const handleCurrentItem = (data) => {
        setCurrentItems(data);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col-12')}>
                    <Tilte title="Lịch chiếu" />
                </div>
                <ul className={cx('showtimes')}>
                    {times.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={cx('col-sm-4', `${item.keyMap === timeID ? cx('active') : ''}`)}
                                onClick={() => setTimeID(item.keyMap)}
                            >
                                {item.value}
                            </li>
                        );
                    })}
                </ul>
                <Paginate res={films} parentCallback={handleCurrentItem}>
                    <Films films={currentItems} />
                </Paginate>
            </div>
        </div>
    );
}
export default TimeShow;
