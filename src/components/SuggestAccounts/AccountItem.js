import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex={'-1'} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                // visible
                interactive
                offset={[-15, 0]}
                delay={[400, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://th.bing.com/th/id/OIP.R_l_xK8suc9zLRDBDOq0UgHaKN?rs=1&pid=ImgDetMain"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tranminhhieu</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        </p>
                        <p className={cx('name')}>Trần Minh Hiếu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
