import React from 'react';
import { Grid } from '../';

const Container = Grid.Container;
const Row = Grid.Row;
const Column = Grid.Column;

export default {
	title: 'Components/Grid',
	component: Grid,
	subcomponents: { Container, Row, Column },
};

export const Default = () => {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column col={2} sm={6} md={6}>
					9
				</Grid.Column>
				<Grid.Column col={6} sm={1}>
					10
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};
