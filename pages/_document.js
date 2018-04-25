import Document, { Head, Main, NextScript } from 'next/document'

import ReactGA from 'react-ga'

import stylesheet from 'styles/index.sass'

const page = {
    index: {
        description: 'Description',
        url: 'https://ross.so',
        keywords: 'Keywords',
        facebookShare: '/static/images/meta/share.png',
        twitterShare: '/static/images/meta/share.png',
        favicon: {
            png: '/static/images/meta/favicons/favicon.png',
            ico: '/static/images/meta/favicons/favicon.ico',
            iphone: '/static/images/meta/favicons/touch-icon-iphone.png',
            svg: '/static/images/meta/favicons/mask.svg'
        }
    }
};

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    componentDidMount() {
        document.documentElement.className = 'js'
        //Google Analytics
        ReactGA.initialize('UA-XXXX-X')
        ReactGA.pageview(document.location.pathname)
        
        
    }


    render() {
        console.log(stylesheet)
        return (
            <html>
                <Head>
                    <title>Title</title>

                    <meta charSet='utf-8'></meta>
                    <meta httpEquiv='x-ua-compatible' content='ie=edge'></meta>
                    <meta name='format-detection' content='telephone=no'></meta>
                    <meta name='viewport' content='width=device-width,initial-scale=1'></meta>
                    <meta content='width=device-width' name='viewport'></meta>
                    <meta content='yes' name='apple-mobile-web-app-capable'></meta>
                    <meta content='yes' name='apple-touch-fullscreen'></meta>

                    <link rel='icon' href={page.index.favicon.ico} type='image/x-icon'></link>
                    <link rel="shortcut icon" href={page.index.favicon.ico}></link>
                    <link rel="icon" type="image/png" href={page.index.favicon.png}></link>
                    <link rel="apple-touch-icon" href={page.index.favicon.iphone}></link>
                    <link rel="mask-icon" href={page.index.favicon.svg} color="#141516"></link>

                    {/* Google content */}
                    <meta content='Description' name='application-name'></meta>
                    <meta content={page.index.description} name='description'></meta>
                    <meta content={page.index.title} name='author'></meta>
                    <meta content={page.index.keywords} name='keywords'></meta>
                    <meta content='2017' name='copyright'></meta>


                    {/*Facebook content*/}
                    <meta content='website' property='og:type'></meta>
                    <meta content='Description' property='og:title'></meta>
                    <meta content={page.index.description} property='og:description'></meta>
                    <meta content={page.index.facebookShare} property='og:image'></meta>
                    <meta content={page.index.url} property='og:url'></meta>
                    <meta content='1200' property='og:image:width'></meta>
                    <meta content='630' property='og:image:height'></meta>
                    <meta content='Description' property='og:site_name'></meta>


                    {/*Twitter content*/}
                    <meta content='summary_large_image' name='twitter:card'></meta>
                    <meta content='Description' name='twitter:title'></meta>
                    <meta content={page.index.description} name='twitter:description'></meta>
                    <meta content={page.index.twitterShare} name='twitter:image'></meta>
                    <meta content='@eugeneross' name='twitter:site'></meta>
                    <meta content='@eugeneross' name='twitter:creator'></meta>

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,800" rel="stylesheet" />
                  
                    {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
                    
                    <link rel="stylesheet" href="/_next/static/style.css" />

                </Head>
                <body>
                   
                    <Main />
                    <NextScript />
                    
                </body>
            </html>
        )
        
    }
}