import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className='center'>
		  <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
		  <div className='bounding-box' style={{top: box.leftCol, right: box.topRow, bottom: box.rightCol, left: box.bottomRow}}></div>
		</div>
	);
}

export default FaceRecognition;