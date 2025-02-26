import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avarta')}
                src="https://sinhvien.epu.edu.vn/GetImage.aspx?MSSV=22810310174"
                alt="Trần Minh Hiếu"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Minh Hiếu</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </h4>
                <span className={cx('username')}>Trần Minh Hiếu</span>
            </div>
        </div>
    );
}

export default AccountItem;
