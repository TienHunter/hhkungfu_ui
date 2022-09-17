import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HomeFilms.module.scss';
import { removeAccents } from '~/utils/common';
import * as filmService from '~/apiService/filmService';
import Paginate from '~/layouts/components/Paginate/Paginate';
import Films from '~/layouts/components/Films';
const cx = classNames.bind(styles);

function HomeFilms() {
    const [films, setFilms] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchApi = async () => {
            const res = await filmService.getFilms();
            const result = [...res];
            setFilms(result);
        };
        fetchApi();
    }, []);
    const handleCurrentItem = (data) => {
        setCurrentItems(data);
    };
    return (
        <Paginate res={films} parentCallback={handleCurrentItem}>
            <div className={cx('wrapper')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <h4 className={cx('heading')}>
                                <div className="link-to-page">
                                    <span className={cx('h-text')}>Mới nhất</span>
                                </div>
                            </h4>
                        </div>
                        <Films films={currentItems} />
                    </div>
                </div>
            </div>
        </Paginate>
    );
}

export default HomeFilms;
