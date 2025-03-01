import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchRuslt] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleHideResult = () => {
        setShowResult(false);
    };
    const refFocus = useRef();
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchRuslt([]);
            setLoading(false);
            return;
        }

        setLoading(true);

        const timer = setTimeout(() => {
            fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    searchValue,
                )}&type=less`,
            )
                .then((res) => res.json())
                .then((res) => {
                    setSearchRuslt(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, 600);
        return () => clearTimeout(timer);
    }, [searchValue]);

    const handleClickClear = () => {
        setSearchValue('');
        setSearchRuslt([]);
        refFocus.current.focus();
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={refFocus}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cx('clear-faCircleXmark')}
                            onClick={handleClickClear}
                        />
                    </button>
                )}

                {/* Loading */}
                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className={cx('search-faMagnifyingGlass')}
                        style={{ outline: 'none' }}
                    />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
