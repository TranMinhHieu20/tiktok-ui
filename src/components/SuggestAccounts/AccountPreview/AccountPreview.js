import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://th.bing.com/th/id/OIP.R_l_xK8suc9zLRDBDOq0UgHaKN?rs=1&pid=ImgDetMain"
                    alt=""
                />
                <Button primary className={cx('min-width')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <storng>tranminhhieu</storng>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </p>
                <p className={cx('name')}>Trần Minh Hiếu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('values')}>1.0M</strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('values')}>1.0M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
