import Image from 'next/image';
import Profile from '../../../../public/profilepic/Profile.png';
import { ResumeIcon } from './Icons/ResumeIcon';
import socialMediaLinks from './socialMediaLinks'



function HeroSection() {
  return (
    <section name="hero" className="w-full h-screen bg-blue-300/10">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row md:mx-auto bg-blue-600/5 ">
        <div className="md:w-2/3">
          <Image
            src={Profile}
            alt="me"
            className="transition duration-200 rounded-full md:rounded-3xl hover:shadow-md hover:shadow-blue-300 "
          />
        </div>
        <div className="flex flex-col h-full sm:pt-8 md:justify-center">
          <h2 className="text-4xl font-medium sm:text-center right-1 md:text-7xl md:text-left">
            Hi! My name is Salman
          </h2>
          <p className="py-4 mt-4 text-center text-gray-400 md:text-left">
            A{' '}
            <strong className=" text-sky-400">
              Full-Stack Software Developer
            </strong>{' '}
            ready to solve{' '}
            <strong className="text-yellow-400">complex</strong> problems with{' '}
            <strong className="text-green-400">innovative</strong> solutions
          </p>

          <div className="flex justify-between mt-4">
            <button className="flex items-center p-2 text-xl font-light duration-200 cursor-pointer rounded-xl w-30 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 hover:bg-slate-200 hover:text-black">
              My Resume <span><ResumeIcon height="5%" width="2rem" /></span>
            </button>
            {socialMediaLinks.map(({ Icon, url }) => (
              <a key={url} href={url}>
                <Icon className="items-center text-blue-300 duration-200 hover:scale-110 hover:text-white" height="100%" width="3rem" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;