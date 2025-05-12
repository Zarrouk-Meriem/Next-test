import Spinner from "./_components/_Shared/Spinner";

function loading() {
	return (
		<div className='grid items-center justify-center min-h-svh'>
			<Spinner />
		</div>
	);
}

export default loading;
