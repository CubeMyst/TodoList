import { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton } from './Filters.components';

export default function TodoFilters({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) {
	return (
		<FiltersContainer>
			<ItemsLeft total={total} />

			<FilterButtonContainer>
				<FilterButton
					action={() => showAllTodos()}
					active={activeFilter}
					filter="All"
				/>
				<FilterButton
					action={() => showActiveTodos()}
					active={activeFilter}
					filter="Active"
				/>
				<FilterButton
					action={() => showCompletedTodos()}
					active={activeFilter}
					filter="Completed"
				/>
			</FilterButtonContainer>

			<button
				onClick={() => handleClearComplete()}
				className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out select-none">
				Clear Completed
			</button>
		</FiltersContainer>
	);
}
