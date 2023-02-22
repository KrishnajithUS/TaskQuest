import React from 'react';

function ImageUploader({ handleFile }) {
    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };
    return (
        <div>
            <button
                onClick={handleClick}
                type="button"
                className="focus:outline-none text-xs text-white bg-slate-900 hover:bg-slate-800 mb-4 rounded-lg p-2"
            >
                Upload Picture
            </button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

export default ImageUploader;