import Spinner from "./_components/_Shared/Spinner";

function loading() {
	return (
		<div className='flex flex-col gap-[40px] items-center justify-center min-h-svh'>
			<Spinner />
		</div>
	);
}

export default loading;
