import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowRightToBracket,
    faCircleXmark,
    faCloudDownload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faQuestionCircle,
    faSignIn,
    faSpinner,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    faSignalMessenger,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: (
            <FontAwesomeIcon
                icon={faEarthAsia}
                className={cx('faEarthAsia-icon')}
            />
        ),
        title: 'English',
        children: {
            title: 'en',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: (
            <FontAwesomeIcon
                icon={faQuestionCircle}
                className={cx('faQuestionCircle-icon')}
            />
        ),
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: (
            <FontAwesomeIcon
                icon={faKeyboard}
                className={cx('faKeyboard-icon')}
            />
        ),
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchRuslt] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchRuslt([]);
        }, 0);
    });
    //handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: (
                <FontAwesomeIcon icon={faUser} className={cx('faUser-icon')} />
            ),
            title: 'View profile',
            to: '/@minhhieutran',
        },
        {
            icon: (
                <FontAwesomeIcon
                    icon={faCoins}
                    className={cx('faCoins-icon')}
                />
            ),
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: (
                <FontAwesomeIcon icon={faGear} className={cx('faGear-icon')} />
            ),
            title: 'Setting',
            to: '/settings',
        },
        {
            icon: (
                <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className={cx('faQuestionCircle-icon')}
                />
            ),
            title: 'Feedback and help',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: (
                <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className={cx('faArrowRightToBracket-icon')}
                />
            ),
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} title="Tiktok">
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            {/* <Tippy
                                delay={[0, 200]}
                                content="Messenger"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon
                                        icon={faSignalMessenger}
                                        className={cx('faSignalMessenger-icon')}
                                    />
                                </button>
                            </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Button text>Up load</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                        // className={cx('arrow-menu')}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://sinhvie.epu.edu.vn/GetImage.aspx?MSSV=22810310174"
                                alt="Trần Minh Hiếu"
                                fallBack="https://th.bing.com/th/id/OIP.h8HQw4WfOBdM6S8rn3AyvwHaHa?rs=1&pid=ImgDetMain"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className={cx('faEllipsisVertical-icon')}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
