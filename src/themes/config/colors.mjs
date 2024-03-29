const colors = {
	blueGrey: {
		blueGrey1: '#ECEFF1',
		blueGrey2: '#CFD8DC',
		blueGrey3: '#B0BEC5',
		blueGrey4: '#90A4AE',
		blueGrey5: '#78909C',
		blueGrey6: '#607D8B',
		blueGrey7: '#546E7A',
		blueGrey8: '#455A64',
		blueGrey9: '#37474F',
		blueGrey10: '#263238',
	},
	grey: {
		grey1: '#FAFAFA',
		grey2: '#F5F5F5',
		grey3: '#EEEEEE',
		grey4: '#E0E0E0',
		grey5: '#BDBDBD',
		grey6: '#9E9E9E',
		grey7: '#757575',
		grey8: '#616161',
		grey9: '#424242',
		grey10: '#212121',
	},
	teal: {
		teal1: '#E0F2F1',
		teal2: '#B2DFDB',
		teal3: '#80CBC4',
		teal4: '#4DB6AC',
		teal5: '#26A69A',
		teal6: '#009688',
		teal7: '#00897B',
		teal8: '#00796B',
		teal9: '#00695C',
		teal10: '#004D40',
	},
	green: {
		green1: '#E8F5E9',
		green2: '#C8E6C9',
		green3: '#A5D6A7',
		green4: '#81C784',
		green5: '#66BB6A',
		green6: '#4CAF50',
		green7: '#43A047',
		green8: '#388E3C',
		green9: '#2E7D32',
		green10: '#1B5E20',
	},
	lightGreen: {
		lightGreen1: '#F1F8E9',
		lightGreen2: '#DCEDC8',
		lightGreen3: '#C5E1A5',
		lightGreen4: '#AED581',
		lightGreen5: '#9CCC65',
		lightGreen6: '#8BC34A',
		lightGreen7: '#7CB342',
		lightGreen8: '#689F38',
		lightGreen9: '#558B2F',
		lightGreen10: '#33691E',
	},
	lime: {
		lime1: '#F9FBE7',
		lime2: '#F0F4C3',
		lime3: '#E6EE9C',
		lime4: '#DCE775',
		lime5: '#D4E157',
		lime6: '#CDDC39',
		lime7: '#C0CA33',
		lime8: '#AFB42B',
		lime9: '#9E9D24',
		lime10: '#827717',
	},
	yellow: {
		yellow1: '#FFFDE7',
		yellow2: '#FFF9C4',
		yellow3: '#FFF59D',
		yellow4: '#FFF176',
		yellow5: '#FFEE58',
		yellow6: '#FFEB3B',
		yellow7: '#FDD835',
		yellow8: '#FBC02D',
		yellow9: '#F9A825',
		yellow10: '#F57F17',
	},
	amber: {
		amber1: '#FFF8E1',
		amber2: '#FFECB3',
		amber3: '#FFE082',
		amber4: '#FFD54F',
		amber5: '#FFCA28',
		amber6: '#FFC107',
		amber7: '#FFB300',
		amber8: '#FFA000',
		amber9: '#FF8F00',
		amber10: '#FF6F00',
	},
	orange: {
		orange1: '#FFF3E0',
		orange2: '#FFE0B2',
		orange3: '#FFCC80',
		orange4: '#FFB74D',
		orange5: '#FFA726',
		orange6: '#FF9800',
		orange7: '#FB8C00',
		orange8: '#F57C00',
		orange9: '#EF6C00',
		orange10: '#E65100',
	},
	deepOrange: {
		deepOrange1: '#FBE9E7',
		deepOrange2: '#FFCCBC',
		deepOrange3: '#FFAB91',
		deepOrange4: '#FF8A65',
		deepOrange5: '#FF7043',
		deepOrange6: '#FF5722',
		deepOrange7: '#F4511E',
		deepOrange8: '#E64A19',
		deepOrange9: '#D84315',
		deepOrange10: '#BF360C',
	},
	brown: {
		brown1: '#EFEBE9',
		brown2: '#D7CCC8',
		brown3: '#BCAAA4',
		brown4: '#A1887F',
		brown5: '#8D6E63',
		brown6: '#795548',
		brown7: '#6D4C41',
		brown8: '#5D4037',
		brown9: '#4E342E',
		brown10: '#3E2723',
	},
	red: {
		red1: '#FFEBEE',
		red2: '#FFCDD2',
		red3: '#EF9A9A',
		red4: '#E57373',
		red5: '#EF5350',
		red6: '#F44336',
		red7: '#E53935',
		red8: '#D32F2F',
		red9: '#C62828',
		red10: '#B71C1C',
	},
	pink: {
		pink1: '#FCE4EC',
		pink2: '#F8BBD0',
		pink3: '#F48FB1',
		pink4: '#F06292',
		pink5: '#EC407A',
		pink6: '#E91E63',
		pink7: '#D81B60',
		pink8: '#C2185B',
		pink9: '#AD1457',
		pink10: '#880E4F',
	},
	purple: {
		purple1: '#F3E5F5',
		purple2: '#E1BEE7',
		purple3: '#CE93D8',
		purple4: '#BA68C8',
		purple5: '#AB47BC',
		purple6: '#9C27B0',
		purple7: '#8E24AA',
		purple8: '#7B1FA2',
		purple9: '#6A1B9A',
		purple10: '#4A148C',
	},
	deepPurple: {
		deepPurple1: '#EDE7F6',
		deepPurple2: '#D1C4E9',
		deepPurple3: '#B39DDB',
		deepPurple4: '#9575CD',
		deepPurple5: '#7E57C2',
		deepPurple6: '#673AB7',
		deepPurple7: '#5E35B1',
		deepPurple8: '#512DA8',
		deepPurple9: '#4527A0',
		deepPurple10: '#311B92',
	},
	indigo: {
		indigo1: '#E8EAF6',
		indigo2: '#C5CAE9',
		indigo3: '#9FA8DA',
		indigo4: '#7986CB',
		indigo5: '#5C6BC0',
		indigo6: '#3F51B5',
		indigo7: '#3949AB',
		indigo8: '#303F9F',
		indigo9: '#283593',
		indigo10: '#1A237E',
	},
	blue: {
		blue1: '#E3F2FD',
		blue2: '#BBDEFB',
		blue3: '#90CAF9',
		blue4: '#64B5F6',
		blue5: '#42A5F5',
		blue6: '#2196F3',
		blue7: '#1E88E5',
		blue8: '#1976D2',
		blue9: '#1565C0',
		blue10: '#0D47A1',
	},
	lightBlue: {
		lightBlue1: '#E1F5FE',
		lightBlue2: '#B3E5FC',
		lightBlue3: '#81D4FA',
		lightBlue4: '#4FC3F7',
		lightBlue5: '#29B6F6',
		lightBlue6: '#03A9F4',
		lightBlue7: '#039BE5',
		lightBlue8: '#0288D1',
		lightBlue9: '#0277BD',
		lightBlue10: '#01579B',
	},
	cyan: {
		cyan1: '#E0F7FA',
		cyan2: '#B2EBF2',
		cyan3: '#80DEEA',
		cyan4: '#4DD0E1',
		cyan5: '#26C6DA',
		cyan6: '#00BCD4',
		cyan7: '#00ACC1',
		cyan8: '#0097A7',
		cyan9: '#00838F',
		cyan10: '#006064',
	},
};
export default colors;
