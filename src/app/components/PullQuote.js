// components/PullQuote.js

import React from 'react';
import styles from '../styles/PullQuote.module.css'; // Assuming CSS modules are used

const PullQuote = ({ text, author }) => {
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br />') }; // Replacing newlines with <br />
    };

    return (
        <blockquote className={styles.pullQuote}>
            <p className={styles.quoteText} dangerouslySetInnerHTML={createMarkup(text)}></p>
            {author && <footer className={styles.quoteAuthor}>— {author}</footer>}
        </blockquote>
    );
};

export default PullQuote; // Correct default export