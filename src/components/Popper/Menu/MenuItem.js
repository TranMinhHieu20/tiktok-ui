import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate });
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            className={cx(classes)}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
