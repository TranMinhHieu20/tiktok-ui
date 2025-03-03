import classNames from 'classnames/bind';
import styles from './separate.module.scss';

const cx = classNames.bind(styles);

function Separate() {
    return <div className={cx('separate')}></div>;
}

export default Separate;
