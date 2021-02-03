import GoogleMapReact from "google-map-react";
import { Image } from "semantic-ui-react";
import Logo from "../../public/static/img/elgauchologo.png"
const LogoOnGoogleMap = ({ text }) => (
  <div style={{
    color: 'white',
    padding: '20px 20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    backgroundImage: `url(${Logo})`,
    backgroundSize: "cover",
    border: "1px solid #cf1b15",
    transform: 'translate(-50%, -50%)'
  }}>
  </div>
);
const LocationSectionGGMap = ({ lat, lng }) => {
  const center = { lat: lat, lng: lng };
  const zomm = 17;
  return (
    <GoogleMapReact
      defaultCenter={center}
      defaultZoom={zomm}
      yesIWantToUseGoogleMapApiInternals
      bootstrapURLKeys={{
        key: "AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE",
        language: 'en'
      }}
    >
      <LogoOnGoogleMap lat={lat} lng={lng} />

    </GoogleMapReact>
  )
}
export default LocationSectionGGMap;