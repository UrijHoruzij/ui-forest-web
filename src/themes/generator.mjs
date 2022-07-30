import themes from './config/index.mjs';
import generator from 'generator-css-variables';

generator.default(themes, { path: 'src/components/ThemeProvider/themes/', pretty: true });
