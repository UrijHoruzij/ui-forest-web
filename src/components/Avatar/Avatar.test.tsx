// import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { Avatar, ThemeProvider } from '..';

describe('Avatar component', () => {
	test('Render avatar snapshot', () => {
		const component = (
			<ThemeProvider>
				<Avatar
					avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
					fullname="Helena Lopes"
					isOnline
					size="small"
				/>
				<Avatar
					avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
					fullname="Helena Lopes"
					isOnline
					size="medium"
				/>
				<Avatar
					avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
					fullname="Helena Lopes"
					isOnline
					size="large"
				/>
				{/* <Avatar.Group
					users={[
						<Avatar
							size="medium"
							avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
							fullname="Helena Lopes"
						/>,
						<Avatar
							size="medium"
							avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
							fullname="Helena Lopes"
						/>,
						<Avatar
							size="medium"
							avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
							fullname="Helena Lopes"
						/>,
					]}></Avatar.Group> */}
			</ThemeProvider>
		);
		render(component);
		// const tree = renderer.create(component).toJSON();
		// expect(tree).toMatchSnapshot();
	});
});
