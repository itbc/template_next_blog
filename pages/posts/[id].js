import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Image from 'next/image';
import Script from 'next/script';

import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

const YourComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={100} // Desired size with correct aspect ratio
        width={100} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

// export async function getStaticProps({ params }) {
//     const postData = getPostData(params.id);
//     return {
//         props: {
//             postData,
//         },
//     };
// }

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

// export default function FirstPost() {
//     return (
//         <Layout>
//             <Head>
//                 <title>First Post</title>
//             </Head>
//             <Script
//                 src="https://connect.facebook.net/en_US/sdk.js"
//                 strategy="lazyOnload"
//                 onLoad={() =>
//                     console.log(`script loaded correctly, window.FB has been populated`)
//                 }
//             />
//             <h1>First Post</h1>
//         </Layout>
//     );
// }

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div className={utilStyles.mainText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}