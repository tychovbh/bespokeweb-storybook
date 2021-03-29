import React from 'react'
import PropTypes from 'prop-types'

export const Icon = ({name, className}) => {
    const icons = {
        'arrow-down': <svg className={className} fill={'currentColor'} viewBox={'0 0 20 20'} aria-hidden={'true'}><path fillRule={'evenodd'} d={'M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'} clipRule={'evenodd'}/></svg>,
        'arrow-up': <svg className={className} fill={'currentColor'} viewBox={'0 0 20 20'} aria-hidden={'true'}><path fillRule={'evenodd'} d={'M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'} clipRule={'evenodd'}/></svg>,
        'calendar': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'} /></svg>,
        'chart-bar': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'} /></svg>,
        'check': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M5 13l4 4L19 7'}/></svg>,
        'check-circle': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'}/></svg>,
        'chevron-down': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M19 9l-7 7-7-7'} /></svg>,
        'chevron-left': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M15 19l-7-7 7-7'} /></svg>,
        'chevron-right': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M9 5l7 7-7 7'} /></svg>,
        'chevron-up': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M5 15l7-7 7 7'} /></svg>,
        'cloud-upload': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'}/></svg>,
        'exclamation': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'}/></svg>,
        'exclamation-shield': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'}/></svg>,
        'eye': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M15 12a3 3 0 11-6 0 3 3 0 016 0z'}/><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'}/></svg>,
        'folder': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'} /></svg>,
        'home': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'} /></svg>,
        'inbox': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'} /></svg>,
        'menu': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M4 6h16M4 12h16M4 18h16'}/></svg>,
        'pencil': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'}/></svg>,
        'pencil-alt': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'}/></svg>,
        'play': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'} /><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} /></svg>,
        'plus': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M12 6v6m0 0v6m0-6h6m-6 0H6'} /></svg>,
        'search': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'} /></svg>,
        'share': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'} /></svg>,
        'trash': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'} /></svg>,
        'users': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'} /></svg>,
        'x': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M6 18L18 6M6 6l12 12'}/></svg>,
        'x-circle': <svg className={className} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'}><path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'}/></svg>
    }

    return icons[name]
}

Icon.propTypes = {

    /**
     * The name of the Icon
     */
    name: PropTypes.string,

    /**
     * The className of the Icon
     */
    className: PropTypes.string
}
