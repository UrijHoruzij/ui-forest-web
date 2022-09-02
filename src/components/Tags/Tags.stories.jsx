import React from 'react';
import { Tags } from '../';

const Tag = Tags.Tag;

export default {
	title: 'Components/Tags',
	component: Tags,
	subcomponents: { Tag },
};

export const Default = () => (
	<Tags>
		<Tags.Tag activ>JS</Tags.Tag>
		<Tags.Tag>HTML</Tags.Tag>
		<Tags.Tag>CSS</Tags.Tag>
	</Tags>
);
