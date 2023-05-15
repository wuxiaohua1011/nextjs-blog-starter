import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>Nice to meet you.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <p>
            Join me on this exciting journey where we delve into the ever-evolving realm of technology, exploring its intricacies and unraveling its wonders. But here at Nimbus Nova, we go beyond the circuits and codes, blending in a touch of lifestyle and personal narratives to create a holistic learning experience. Whether you're a tech enthusiast, a curious learner, or simply seeking inspiration, this blog is your companion in discovering the latest trends, useful insights, and fascinating anecdotes that bridge the gap between technology and our everyday lives. So, fasten your seatbelts and prepare to embark on a thrilling adventure where knowledge meets creativity, and innovation intertwines with personal growth. 
          </p>
          <br />
          <p>
            Welcome to Nimbus Nova, where we navigate the cosmos of technology, one story at a time.
          </p>
          <br />
          <p>
            Note: wording proudly modified by ChatGPT :) 
          </p>
        </section>
      </Container>
    </Layout>
  )
}
