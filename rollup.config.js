import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import fs from 'node:fs';

const plugins = [
	peerDepsExternal(),
	resolve(),
	commonjs(),
	typescript({
		tsconfig: './tsconfig.json',
		exclude: ['src/**/*.test.(tsx|ts)', 'src/**/*.stories.(tsx|ts|mdx)'],
	}),
	postcss({ modules: true }),
	terser(),
];

const getFolders = (entry) => {
	const dirs = fs.readdirSync(entry);
	const dirsWithoutIndex = dirs
		.filter((name) => name !== 'index.ts')
		.filter((name) => name !== 'Global')
		.filter((name) => name !== 'utils');
	return dirsWithoutIndex;
};

const folderBuilds = getFolders('./src/components').map((folder) => {
	return {
		input: `src/components/${folder}/index.tsx`,
		output: {
			file: `dist/${folder}/index.js`,
			sourcemap: true,
			exports: 'named',
		},
		plugins,
		external: ['react', 'react-dom'],
	};
});

export default [
	...folderBuilds,
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
				name: 'react-ts-lib',
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins,
		external: ['react', 'react-dom'],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
	},
];
