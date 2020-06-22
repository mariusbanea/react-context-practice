import React from 'react'
import LanguageContext from './LanguageContext'

console.log(LanguageContext)

export default function LangControls(props) {
    return (
        <LanguageContext.Consumer>
            {(contextValue) => {
                console.log(contextValue)
                return (
                    <>
                        <button
                            disabled={contextValue.lang === 'en-GB'}
                            onClick={() => props.onSetLang('en-GB')}
                        >
                            British{' '}
                            <span role='img' aria-label='en-GB'>🇬🇧</span>
                        </button>
                        {' '}
                        <button
                            disabled={contextValue.lang === 'en-US'}
                            onClick={() => props.onSetLang('en-US')}
                        >
                            American{' '}
                            <span role='img' aria-label='en-US'>🇺🇸</span>
                        </button>
                        {' '}
                        <button
                            disabled={contextValue.lang === 'ko'}
                            onClick={() => props.onSetLang('ko')}
                        >
                            Korean{' '}
                            <span role='img' aria-label='ko'>🇰🇷</span>
                        </button>

                    </>
                )
            }}
        </LanguageContext.Consumer>
    );
}
