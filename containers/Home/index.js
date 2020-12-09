import Layout from "../../components/Layout";
import Link from "next/link";
const Home = () => {
    return (
        <Layout>
            <div>this is Home</div>
            <Link href="/about">go to another pages</Link>
        </Layout>
    )
}
export default Home;