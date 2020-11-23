import GoogleMapReact from "google-map-react";
import { useState } from "react";
import Marker from "./Marker";
import LocationInfo from "./LocationInfo";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null); //null is the default value
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Marker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      ); //0 is lng
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDFQFfxYoZh6htcp4OgmPHf2qVL72vhjEk" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
};
//if locationInfo then display locationinfo component and pass in info as a prop
Map.defaultProps = {
  center: {
    lat: 38.5816,
    lng: -121.4944,
  },
  zoom: 6,
};

export default Map;
