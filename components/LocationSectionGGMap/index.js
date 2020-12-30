import GoogleMapReact from "google-map-react";
const LocationSectionGGMap = () => {
    const center = { lat: 10.790045841510906, lng: 106.71802615681743 };
    const zomm = 17;
    return (
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zomm}
            bootstrapURLKeys={{
                key: "AIzaSyCP0PjMa80DJiUo2zdFCbw09XV1dcK4aIE",
                language: 'en'
            }}
        >

        </GoogleMapReact>
    )
}
export default LocationSectionGGMap;