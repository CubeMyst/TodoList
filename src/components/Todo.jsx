import IconClose from '../assets/close-icon.svg';
import IconCheck from '../assets/check-icon.svg';

export default function Todo({ todo, handleSetComplete, handleDelete }) {
	const { id, title, completed } = todo;

	return (
		<div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
			<div className="flex items-center">
				{completed ? (
					<div
						onClick={() => handleSetComplete(id)}
						className="h-6 w-6 bg-green-700 p-1 rounded-full cursor-pointer select-none">
						<img
							className="h-4 w-4"
							src={IconCheck}
							alt="Check icon"
						/>
					</div>
				) : (
					<span
						onClick={() => handleSetComplete(id)}
						className={`h-6 w-6 border border-gray-500 border-solid p-1 rounded-full cursor-pointer`}></span>
				)}

				<p className={'pl-4 ' + (completed && 'line-through')}>{title}</p>
			</div>
			<img
				onClick={() => handleDelete(id)}
				className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in select-none"
				src={IconClose}
				alt="Close icon"
			/>
		</div>
	);
}
