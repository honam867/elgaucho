import { createMedia } from '@artsy/fresnel'
const { Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
const OnDesktop = ({ children }) => {
    return (
        <Media greaterThan='mobile'>
            {children}
        </Media>
    )
}
export default OnDesktop;