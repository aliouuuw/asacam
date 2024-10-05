import { Team } from './Team'

function AboutUs() {
  return (
    <section id="company" className='h-full px-8 md:px-16 xl:px-24 py-20 space-y-4'>
      <h2 className='text-4xl font-bold text-white mb-4'>About us</h2>
      <p className="text-md leading-6 pb-4">We are a young team composed of ambitious individiuals with experience in multiple fields. <br /> Our story is just starting!</p>
      <Team />
    </section >
  )
}

export default AboutUs
