import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';
import Separate from './separate';

const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <Separate />
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
