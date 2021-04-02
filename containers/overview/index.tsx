import { SiTwitter, SiGithub } from "react-icons/si"

const Overview: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8/12">
          <div className="text-center">
            <div>
              <svg className="m-auto" width="309" height="69" viewBox="0 0 309 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.3807 22H55.7614C55.696 8.86649 45.5682 0.176147 29.3636 0.176147C13.4531 0.176147 2.2145 8.7358 2.31251 21.4773C2.27984 31.9318 9.53268 37.7472 21.3921 40.2955L28.0568 41.733C35.5057 43.3665 38.054 45.2287 38.1193 48.2671C38.054 51.5668 35.0483 53.8864 29.233 53.8864C22.2742 53.8864 18.1577 50.6193 17.8636 44.4773H0.613647C0.678988 61.2699 12.0483 68.7841 29.4943 68.7841C46.4503 68.7841 56.6108 61.4659 56.6762 48.2671C56.6108 38.0739 50.5341 30.919 35.7671 27.75L30.2784 26.5739C23.9404 25.2344 21.098 23.3722 21.2614 20.1705C21.294 17.2301 23.7443 15.0739 29.3636 15.0739C35.2443 15.0739 38.0213 17.6548 38.3807 22Z" fill="url(#paint0_linear-228015)"/>
              <path d="M63.5859 68H111.677V53.3637H81.7507V41.8636H109.325V27.2273H81.7507V15.7273H111.808V1.09092H63.5859V68Z" fill="url(#paint1_linear-698068)"/>
              <path d="M178.708 1.09092H160.544V36.1136H160.021L136.237 1.09092H120.816V68H138.981V32.8466H139.373L163.549 68H178.708V1.09092Z" fill="url(#paint2_linear-010010)"/>
              <path d="M214.875 1.09092V46.9602C214.809 52.1222 212.653 54.8012 208.602 54.8012C204.616 54.8012 202.395 52.1548 202.199 47.0909H184.034C183.968 62.5114 194.554 68.9148 207.426 68.9148C222.258 68.9148 232.713 60.0284 232.778 46.9602V1.09092H214.875Z" fill="url(#paint3_linear-687813)"/>
              <path d="M258.767 68L262.623 55.1932L266.739 41.6023H280.591L284.708 55.1932L288.563 68H308.165L286.08 1.09092H261.25L239.165 68H258.767ZM266.739 41.6023L273.404 19.5171H273.926L280.591 41.6023H266.739Z" fill="url(#paint4_linear-552397)"/>
              <defs>
              <linearGradient id="paint0_linear-228015" x1="0.613647" y1="34.5455" x2="308.165" y2="34.5455" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FACFE"/>
              <stop offset="1" stopColor="#00F2FE"/>
              </linearGradient>
              <linearGradient id="paint1_linear-698068" x1="0.613647" y1="34.5455" x2="308.165" y2="34.5455" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FACFE"/>
              <stop offset="1" stopColor="#00F2FE"/>
              </linearGradient>
              <linearGradient id="paint2_linear-010010" x1="0.613647" y1="34.5455" x2="308.165" y2="34.5455" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FACFE"/>
              <stop offset="1" stopColor="#00F2FE"/>
              </linearGradient>
              <linearGradient id="paint3_linear-687813" x1="0.613647" y1="34.5455" x2="308.165" y2="34.5455" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FACFE"/>
              <stop offset="1" stopColor="#00F2FE"/>
              </linearGradient>
              <linearGradient id="paint4_linear-552397" x1="0.613647" y1="34.5455" x2="308.165" y2="34.5455" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FACFE"/>
              <stop offset="1" stopColor="#00F2FE"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
            <p className="text-3xl mt-6 text-gray-600">The modern Next.js & GraphQL boilerplate</p>
          </div>
          <ul className="flex justify-center mt-4 text-gray-400">
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