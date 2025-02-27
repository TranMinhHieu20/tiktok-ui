import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchRuslt] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchRuslt([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                                style={{ outline: 'none' }}
                            />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Up load</Button>
                    <Button primary>Log in</Button>
                    <Menu>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className={cx('faEllipsisVertical-icon')}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
