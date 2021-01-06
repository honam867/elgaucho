import { createMedia } from '@artsy/fresnel'
const { Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
const OnTablet = ({ children }) => {
    return (
        <Media at='tablet'>
            {children}
        </Media>
    )
}
export default OnTablet;