import { createMedia } from '@artsy/fresnel'
import OnDesktop from '../OnDesktop';
import OnMobile from '../OnMobile';
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
})

const ResponsiveComponent = ({ onDesktop, onMobile }) => (
    <MediaContextProvider>
        <Media at="sm">
            <OnMobile children={onMobile} />
        </Media>
        <Media at="md">
            <h1>Tablet</h1>
        </Media>
        <Media greaterThanOrEqual="lg" >
            <OnDesktop children={onDesktop} />
        </Media>
    </MediaContextProvider>
)

export default ResponsiveComponent;