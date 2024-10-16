interface ImageProps {
    src: string;
    alt: string;
    size?: string;
}
  
const DisplayImage = ({ src, alt, size = "w-32 h-auto" } : ImageProps) => {
    return <img src={src} alt={alt} className={`rounded-3xl ${size} object-cover`} />;
};
  
export default DisplayImage