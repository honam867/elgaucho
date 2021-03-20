import { createMedia } from '@artsy/fresnel'
import OnDesktop from '../OnDesktop';
import OnMobile from '../OnMobile';
import OnTablet from '../OnTablet';
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

const ResponsiveComponent = ({ onDesktop, onMobile, onTablet }) => (
  <MediaContextProvider>
    <Media at="sm">
      <OnMobile children={onMobile} />
    </Media>
    <Media between={["md", "xl"]}>
      <OnTablet children={onTablet} />
    </Media>
    <Media greaterThan="lg" >
      <OnDesktop children={onDesktop} />
    </Media>
  </MediaContextProvider>
)

export default ResponsiveComponent;