import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Image from 'next/image';
import Script from 'next/script';

const YourComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={100} // Desired size with correct aspect ratio
        width={100} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
        </Layout>
    );
}