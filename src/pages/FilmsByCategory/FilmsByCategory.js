import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './FilmsByCategory.module.scss';
import { removeAccents } from '../../utils/common';
import Paginate from '~/layouts/components/Paginate/Paginate';
import * as filmService from '~/apiService/filmService';
import Films from '~/layouts/components/Films';
import Title from '~/components/Title';
const cx = classNames.bind(styles);

function FilmsByCategoryPage() {
    const [films, setFilms] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [category, setCategory] = useState({});
    const { categoryID } = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await filmService.getFilmsByCategory(categoryID);
            const resCategory = await filmService.getCategoryByCategoryID(categoryID);
            setCategory(resCategory);
            setFilms(res);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID]);
    const handleCurrentItem = (data) => {
        setCurrentItems(data);
    };
    return (
        <Paginate res={films} parentCallback={handleCurrentItem}>
            <div className={cx('wrapper')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <Title title={category.categoryName} />
                        </div>
                        <Films films={currentItems} />
                    </div>
                </div>
            </div>
        </Paginate>
    );
}

export default FilmsByCategoryPage;
