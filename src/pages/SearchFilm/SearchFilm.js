import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SearchFilm.module.scss';
import * as filmService from '~/apiService/filmService';
import Paginate from '~/layouts/components/Paginate/Paginate';
import Films from '~/layouts/components/Films';
import Title from '~/components/Title';
import { convertSearchValue } from '~/utils/common';
const cx = classNames.bind(styles);

function HomeFilms() {
    const [films, setFilms] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const { filmName } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchApi = async () => {
            const res = await filmService.getFilmsByfilmName(convertSearchValue(filmName));
            const result = [...res];
            setFilms(result);
        };
        fetchApi();
    }, [filmName]);
    const handleCurrentItem = (data) => {
        setCurrentItems(data);
    };
    console.log(convertSearchValue(filmName));
    return (
        <Paginate res={films} parentCallback={handleCurrentItem}>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <Title title={`Kết quả tìm kiếm : ${filmName}`} />
                    </div>
                    <Films films={currentItems} />
                </div>
            </div>
        </Paginate>
    );
}

export default HomeFilms;
