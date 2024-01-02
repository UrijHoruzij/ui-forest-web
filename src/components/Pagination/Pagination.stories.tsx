import { useState } from 'react';
import { Pagination } from '..';

export default {
	title: 'Components/Pagination',
	component: Pagination,
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const PageSize = 1;

export const Default = () => {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<Pagination
			currentPage={currentPage}
			totalCount={data.length}
			pageSize={PageSize}
			onPageChange={(page) => setCurrentPage(page)}
		/>
	);
};
