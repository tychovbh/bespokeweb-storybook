import React from 'react'

export const Icon = ({type, className}) => {
    const icons = {
        'check-circle': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'}
                             viewBox={'0 0 24 24'}
                             stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'}/>
        </svg>,
        'exclamation': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'}
                            viewBox={'0 0 24 24'}
                            stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'}/>
        </svg>,
        'shield-exclamation': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'}
                                   viewBox={'0 0 24 24'}
                                   stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'}/>
        </svg>,
        'x': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'}
                  stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M6 18L18 6M6 6l12 12'}/>
        </svg>,
        'x-circle': <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'}
                         stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'}/>
        </svg>,
        'pencil': <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'}/>
        </svg>,
        'pencil-alt': <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'}
                           stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'}/>
        </svg>,
        'eye': <svg xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M15 12a3 3 0 11-6 0 3 3 0 016 0z'}/>
            <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'}
                  d={'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'}/>
        </svg>
    };

    return icons[type]
};