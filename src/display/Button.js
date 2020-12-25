const WideButton = (props) => {
	return (
		<button
			className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
};

export default WideButton;
