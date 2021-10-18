import Head from "next/head"
import { SiTwitter, SiGithub } from "react-icons/si"

const Overview: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Senja - The modern Next.js & GraphQL boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8/12">
          <div className="text-center">
            <h1 className="text-3xl font-black text-red-400">Sen</h1>
            <p className="text-3xl mt-6 text-gray-600">The modern Next.js & GraphQL boilerplate</p>
          </div>
          <ul className="flex justify-center mt-[200px] text-gray-400">
            <li className="px-2">
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-all">Documentation</a>
            </li>
            <li>/</li>
            <li className="px-2">
              <a href="#" className="text-indigo-600">Components</a>
            </li>
            <li>/</li>
            <li className="px-2">
              <a href="#" className="text-indigo-600">UI</a>
            </li>
          </ul>
          <ul className="flex justify-center mt-4">
            <li className="px-2">
              <a href="https://twitter.com/mhmrus">
                <SiTwitter/>
              </a>
            </li>
            <li className="px-2">
              <a href="https://github.com/jamastek/senja">
                <SiGithub/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview