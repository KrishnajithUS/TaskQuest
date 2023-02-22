import Image from './Image';
const ShowImage = ({ images }) => {
    const show = (image) => {
        return <Image image={image} />;
    };
    return (
        <div className=" m-8 mb-0 flex justify-center h-auto">
            <div>
                {images.map(show)}
            </div>
        </div>
    )
};
export default ShowImage;