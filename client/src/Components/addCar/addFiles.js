import React, { useState, useEffect } from "react";

export default function AddPhotos() {
	const [images, setImages] = useState([]);
	const [imgUrls, setImgUrls] = useState([]);

	useEffect(() => {
		if (images.length < 1) return;
		const newImgUrls = [];
		images.forEach(image => newImgUrls.push(URL.createObjectURL(image)));
		setImgUrls(newImgUrls);
	}, [images]);


	function onImageChange(e) {
		console.log(e)
		setImages([...e.target.files])
	}

	return (
		<>
			<label>photos:</label>
			<input type="file" mutiple="true" accept="image/*" onChange={onImageChange}></input>
			{imgUrls.map((imgSource, _id) => <img src={imgSource} key={_id}></img>)}
		</>
	)

};