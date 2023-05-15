import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../../lib/constants'

// Favicon should be recreated at various sizes for each link below.
export default function Meta() {
  // const [theme, setTheme] = useState('okaidia');
  const theme = 'okaidia'

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/blog/authors/nimbus_nova_avatar.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/blog/authors/nimbus_nova_avatar.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/blog/authors/nimbus_nova_avatar.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/blog/authors/nimbus_nova_avatar.png" color="#000000" />
      <link rel="shortcut icon" href="/assets/blog/authors/nimbus_nova_avatar.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
