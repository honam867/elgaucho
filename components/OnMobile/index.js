import { createMedia } from '@artsy/fresnel'
const { Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
const OnMobile = ({ children }) => {
    return (
        <Media at='mobile'>
            {children}
        </Media>
    )
}
export default OnMobile;