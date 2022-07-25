import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from './Markdown.module.css';

const Markdown = (props) => (
	<div className={styles.container}>
		<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} {...props} />
	</div>
);

Markdown.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
};

export default Markdown;
