import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={316}
    height={452}
    viewBox="0 0 316 452"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="334" rx="0" ry="0" width="245" height="44" /> 
    <rect x="0" y="395" rx="0" ry="0" width="68" height="26" /> 
    <rect x="84" y="396" rx="0" ry="0" width="45" height="24" /> 
    <rect x="0" y="0" rx="12" ry="12" width="316" height="321" /> 
  </ContentLoader>
)

export default ProductSkeleton;