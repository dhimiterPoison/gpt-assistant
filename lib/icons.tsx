import { cn } from './utils';

export const ArrowIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
			/>
		</svg>
	);
};

export const TickIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				fillRule='evenodd'
				d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z'
				clipRule='evenodd'
			/>
		</svg>
	);
};
export const XIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				fillRule='evenodd'
				d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
				clipRule='evenodd'
			/>
		</svg>
	);
};
export const SettingsIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				fillRule='evenodd'
				d='M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z'
				clipRule='evenodd'
			/>
		</svg>
	);
};

export const ArchiveIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z' />
			<path
				fillRule='evenodd'
				d='m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z'
				clipRule='evenodd'
			/>
		</svg>
	);
};

export const MicrophoneIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z'
			/>
		</svg>
	);
};

export const HandwriteIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1}
			stroke='currentColor'
			className={cn('h-6 w-6', props.className)}
		>
			<path
				fill='#464455'
				d='M10.354 11.434l-.351-.355a.5.5 0 00-.144.287l.495.069zm6.589-6.514l.351.356-.351-.356zm2.017 1.991l-.36-.346.36.346zm-6.479 6.723l.073.494a.5.5 0 00.287-.148l-.36-.347zM10 14l-.495-.068a.5.5 0 00.568.563L10 14zm8.865-9.146l.326-.379-.326.38zM8 16.5a.5.5 0 000-1v1zm12 4a.5.5 0 000-1v1zm-9.294-8.71l6.588-6.514-.703-.712-6.588 6.515.703.711zM18.6 6.565l-6.479 6.721.72.694 6.479-6.722-.72-.694zm-6.192 6.574l-2.481.366.146.99 2.481-.367-.146-.99zm-1.913.93l.355-2.566-.99-.137-.355 2.566.99.136zm8.043-8.836a.917.917 0 01.062 1.332l.72.693a1.917 1.917 0 00-.129-2.783l-.653.758zm-1.244.043a.917.917 0 011.244-.043l.653-.758a1.917 1.917 0 00-2.6.09l.703.71zM8 15.5H6v1h2v-1zm-2 5h14v-1H6v1zM3.5 18A2.5 2.5 0 006 20.5v-1A1.5 1.5 0 014.5 18h-1zM6 15.5A2.5 2.5 0 003.5 18h1A1.5 1.5 0 016 16.5v-1z'
			></path>
		</svg>
	);
};

export const EllipsisIcon = (props: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='h-6 w-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
			/>
		</svg>
	);
};
