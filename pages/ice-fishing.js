import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function IceFishing() {
  return (
    <>
      <PageSEO
        title={`Ice Fishing - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Ice Fishing
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Sit back, relax and wait for the fish to show up. Downriggers and planers and all the
            fun gear make it easy to up the odds to find fish in the water column. A great day on
            the water for the entire family this is one of the best trips for groups who want to
            catch fish.
          </p>
        </div>
      </div>
    </>
  )
}
