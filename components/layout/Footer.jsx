import Image from 'next/image';
import Link from 'next/link';
import {
  admissionPortalData,
  contactData,
  studentPortalData,
} from '../../data/footer';

function Footer() {
  return (
    <footer className='py-10 bg-gray-800 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 md:gap-10'>
          <div>
            <Image
              src='/images/logo-white.png'
              alt='IUS'
              width={180}
              height={50}
            />

            <h4 className='text-base my-3'>
              Bulu Ocean Tower, 40 Kemal Ataturk Ave, <br /> Banani, Dhaka 1213.
            </h4>

            <ul className='space-y-1 text-sm'>
              {contactData.map((contact) => (
                <li key={contact.id}>
                  <a
                    className='inline-block transition hover:text-brand-100'
                    href={contact.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-16'>
            <h2 className='text-xl font-semibold mb-2'>Student Portal</h2>
            <ul className='space-y-1 text-sm'>
              {studentPortalData.map((link) => (
                <li key={link.id}>
                  <Link href='/'>
                    <a className='transition hover:text-brand-200'>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-16'>
            <h2 className='text-xl font-semibold mb-2'>Admission Portal</h2>
            <ul className='space-y-1 text-sm'>
              {admissionPortalData.map((link) => (
                <li key={link.id}>
                  <Link href='/'>
                    <a className='transition hover:text-brand-200'>
                      {link.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-16'>
            <h2 className='text-xl font-semibold mb-2'>Approved By</h2>
            <ul className='mt-4'>
              <li>
                <Image
                  src={`/images/ugc.png`}
                  alt='ugc'
                  width={200}
                  height={60}
                />
              </li>
              <li>
                <Image
                  src={`/images/govt.png`}
                  alt='govt'
                  width={200}
                  height={60}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center text-sm mt-10'>
          <p>&copy; The University Of Scholars - {new Date().getFullYear()}</p>
          <p>Desgin &amp; Develop by CSE Department, IUS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
