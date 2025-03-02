import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image(
    { src, alt, className, fallBack: customImage = images.noImage, ...props },
    ref,
) {
    const [fallBack, setFallBack] = useState(src);

    const handleError = () => {
        setFallBack(customImage);
    };

    return (
        <img
            className={(cx('wrapper'), className)}
            ref={ref}
            src={fallBack}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
