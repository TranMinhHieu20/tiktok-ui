import { useEffect, useState } from 'react';

function Debounce(value, delay) {
    const [deBounceValue, setDeBounceValue] = useState(value);

    useEffect(() => {
        setTimeout(() => setDeBounceValue(value, delay));

        return clearTimeout(setTimeout(() => setDeBounceValue(value, delay)));
    }, [value]);
    return deBounceValue;
}

export default Debounce;
