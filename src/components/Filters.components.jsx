function FiltersContainer({ children }) {
	return (
		<div className="flex items-center justify-between px-4 py-2 bg-gray-700 ">
			{children}
		</div>
	);
}

function ItemsLeft({ total }) {
	return (
		<p className="text-gray-400 text-sm select-none">{total} items left</p>
	);
}

function FilterButtonContainer({ children }) {
	return (
		<div className="flex items-center space-x-2 select-none">{children}</div>
	);
}

function FilterButton({ action, active, filter }) {
	return (
		<button
			onClick={action}
			className={
				`hover:text-white cursor-pointer transition-all duration-300 ease-in-out` +
				(active.toLowerCase().includes(filter.toLowerCase())
					? ' text-blue-400 '
					: ' text-gray-400 ')
			}>
			{filter}
		</button>
	);
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton };
