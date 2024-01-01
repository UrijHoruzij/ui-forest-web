import { FC } from 'react';
import { GridProps, GridComposition } from './Grid.types';
import Container from './container';
import Row from './row';
import Column from './column';

const Grid: FC<GridProps> & GridComposition = (props) => {
	const { children } = props;
	return <Container>{children}</Container>;
};
Grid.Container = Container;
Grid.Row = Row;
Grid.Column = Column;

export default Grid;
