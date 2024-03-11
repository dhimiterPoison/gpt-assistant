import { EllipsisIcon } from '@/lib/icons';
import React from 'react';

interface WidgetHeaderProps {
	title: string;
}

const WidgetHeader = ({title} : WidgetHeaderProps) => {
	return (
		<div className='widget-header flex items-center justify-between pb-2'>
			<span className='font-semibold'>{title}</span>
			<span className={`cursor-pointer`} >
				<EllipsisIcon/>
			</span>
		</div>
	);
};

export default WidgetHeader;
