import s from './Map.module.scss';

function Map() {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        className={s.map}
        width="100%"
        height="350"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=IThub%20college+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">
          Population Estimator map
        </a>
      </iframe>
    </div>
  );
}

export default Map;
