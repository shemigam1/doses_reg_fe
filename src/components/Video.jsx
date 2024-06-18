import ReactPlayer from 'react-player/lazy';

function handleContextMenu(e) {
	e.preventDefault();
	return false;
}

function Video() {
	return (
		<div className="flex justify-center items-center w-[100%] h-[100%]">
			{/* <ReactPlayer
				url="https://youtu.be/kKAf8-IPPAA"
				width="100%"
				height="100%"
			/> */}
			{/* <video src="https://www.youtube.com/watch?v=Bs8LnMKfww0"></video> */}
			<video controls onContextMenu={handleContextMenu}>
				<source
					src="https://res.cloudinary.com/dkn0vfgbg/video/upload/Doses/Doses_Main_Ad_-_Final_r9misv.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Video;
