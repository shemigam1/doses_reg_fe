import ReactPlayer from 'react-player/lazy';
function Video() {
	return (
		<div>
			<ReactPlayer url="https://youtu.be/kKAf8-IPPAA" volume={null} muted />
			{/* <video src="https://www.youtube.com/watch?v=Bs8LnMKfww0"></video> */}
		</div>
	);
}

export default Video;
