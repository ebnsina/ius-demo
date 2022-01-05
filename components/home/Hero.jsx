import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section>
      {/* <Image
        src='/images/slider-1.webp'
        alt='slider 1'
        width={2400}
        height={700}
        objectFit='cover'
      /> */}

      <div
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.4)), url(/images/slider-1.webp) center center / cover no-repeat`,
          height: '80vh',
        }}
        className='flex flex-col justify-center items-center'
      >
        <div className='pt-60 text-white'>
          <h2 className='text-7xl text-center mb-36'>
            The University Of Scholars
          </h2>
          <div className='flex justify-center items-center space-x-4'>
            <Link href='/'>
              <a className='mb-20 px-6 py-3 transition bg-white text-brand hover:bg-brand-50 uppercase tracking-wider font-semibold rounded-full inline-block'>
                Need Information?
              </a>
            </Link>
            <Link href='/'>
              <a className='mb-20 px-6 py-3 transition bg-brand-200 hover:bg-brand-100 text-white uppercase tracking-wider font-semibold rounded-full inline-block'>
                Get Admission
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
