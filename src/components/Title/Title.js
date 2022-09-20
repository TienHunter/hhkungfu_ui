import classNames from 'classnames/bind';
import styles from './Title.module.scss';
const cx = classNames.bind(styles);
function Tilte({ title }) {
    return (
        <h4 className={cx('heading')}>
            <span className={cx('h-text')}>{title}</span>
        </h4>
    );
}
export default Tilte;
