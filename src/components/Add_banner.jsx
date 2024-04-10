import { useEffect, useRef } from 'react';

export default function AdBanner() {
    const banner = useRef();
    const atOptions = {
        key: '029bf7f54e10dc2891cb1c0e77457eb0',
        format: 'iframe',
        height: 250,
        width: 320,
        params: {},
    };

    useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            banner.current.append(conf);
            banner.current.append(script);
        }
    }, [banner]);

    return <div className="w-full overflow-hidden mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>;
}