import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cx('clear-faCircleXmark')}
                        />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className={cx('search-faMagnifyingGlass')}
                        />
                    </button>
                </div>
                <div className={cx('actions')}>actions</div>
            </div>
        </header>
    );
}

export default Header;
