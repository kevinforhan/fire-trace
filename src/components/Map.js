import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
          <GoogleMapReact
          bootstrapURLKeys={{ key: 
            'AIzaSyDFQFfxYoZh6htcp4OgmPHf2qVL72vhjEk' }}
            defaultCenter={ center }
            defaultZoom={ zoom }
          >

          </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.32656,
        lng: -122.8756
    }, 
    zoom: 6
}

export default Map