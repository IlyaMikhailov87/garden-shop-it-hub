import ContentLoader from "react-content-loader"

const CategoriesSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={317}
    height={397}
    viewBox="0 0 317 397"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="290" y="398" rx="0" ry="0" width="5" height="1" /> 
    <rect x="148" y="255" rx="0" ry="0" width="25" height="0" /> 
    <rect x="0" y="0" rx="12" ry="12" width="317" height="336" /> 
    <rect x="54" y="362" rx="0" ry="0" width="202" height="21" />
  </ContentLoader>
)

export default CategoriesSkeleton;