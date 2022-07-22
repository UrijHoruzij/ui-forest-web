import React from 'react';
import PropTypes from 'prop-types';
import Container from './container';
import Row from './row';
import Column from './column';

const Grid = (props) => {
	const { children } = props;
	return <Container>{children}</Container>;
};
Grid.Container = Container;
Grid.Row = Row;
Grid.Column = Column;

Grid.propTypes = {
	children: PropTypes.node,
};

export default Grid;
