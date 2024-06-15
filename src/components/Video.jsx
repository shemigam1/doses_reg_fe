import ReactPlayer from 'react-player/lazy';
function Video() {
	return (
		<div className='flex justify-center items-center w-[100%] h-[100%]'>
			<ReactPlayer url="https://youtu.be/kKAf8-IPPAA" volume={null} muted width='100%' height='100%' />
			{/* <video src="https://www.youtube.com/watch?v=Bs8LnMKfww0"></video> */}
		</div>
	);
}

export default Video;
