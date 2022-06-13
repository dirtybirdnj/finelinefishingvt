import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Jigging() {
  return (
    <>
      <PageSEO title={`Jigging - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Jigging
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Hang out on top of the fish and wait for an angry lake trout to come up and smash your
            bait! It's high excitement fun when fishing electronics lets you see the fish streak.
          </p>
        </div>
      </div>
    </>
  )
}
