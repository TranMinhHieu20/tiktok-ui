import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';

import { UploadIcon } from '~/components/Icons/Icon';
import Image from '~/components/Image/Image';
import Search from '~/layouts/components/Search/Search';

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
    const currentUser = true;

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
                <Link
                    to={config.routes.home}
                    className={cx('logo')}
                    title="Tiktok"
                >
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />

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
                            <Tippy
                                delay={[0, 200]}
                                content="Messenger"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
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
                                src="https://sinhvien.epu.edu.vn/GetImage.aspx?MSSV=22810310174"
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
