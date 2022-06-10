import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Bowfishing() {
  return (
    <>
      <PageSEO
        title={`Bow Fishing - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bow Fishing
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Cruise the rivers and lakes of Vermont in comfort on our boat with lots of lights.
            Exceptional views of the creatures in the water help make trips as successful as
            possible!
          </p>
        </div>
      </div>
    </>
  )
}
