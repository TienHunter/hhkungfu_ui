import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import styles from './Paginate.module.scss';

const cx = classNames.bind(styles);
const itemsPerPage = 2;
function Paginage({ children, res = [], parentCallback }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(res.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(res.length / itemsPerPage));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemOffset, itemsPerPage, res]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % res.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    useEffect(() => {
        const handleRes = () => {
            parentCallback([...currentItems]);
        };
        handleRes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentItems]);
    // console.log('currentItems: ', currentItems);s
    return (
        <div className={cx('wrapper')}>
            {children}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className={cx('paginate')}
                pageClassName={cx('paginate-page')}
                pageLinkClassName={cx('paginate-page-link')}
            />
        </div>
    );
}

export default Paginage;
