import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { AboutMe } from '../Sections/AboutMe/AboutMe';
import { Skills } from '../Sections/Skills/Skills';
import { Projects } from '../Sections/Projects/AboutMe';
import { ContactMe } from '../Sections/ContactMe/AboutMe';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export function Navbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='fixed top-0 flex justify-center items-center w-full bg-slate-600/[.2]'>
				<Tabs 
					value={value}
					onChange={handleChange}
					aria-label="tabs"
				>
					<Tab label="About Me" className='text-gray-800 transition-all hover:scale-95' {...a11yProps(0)} />
					<Tab label="Skills" className='text-gray-800 transition-all hover:scale-95' {...a11yProps(1)} />
					<Tab label="Projects" className='text-gray-800 transition-all hover:scale-95' {...a11yProps(2)} />
					<Tab label="Contact Me" className='text-gray-800 transition-all hover:scale-95' {...a11yProps(3)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<AboutMe />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Skills />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Projects />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<ContactMe />
			</TabPanel>
		</Box>
	);
}
