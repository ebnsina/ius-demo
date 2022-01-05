import Image from 'next/image';
import { useState } from 'react';
import FACULTY from '../../data/faculty';
import SectionTitle from '../common/SectionTitle';

function Faculty() {
  const [faculties, setFaculties] = useState(FACULTY);

  return (
    <section className='bg-gray-50 py-10'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Faculties'
          subtitle='Get ready for the future with those bullet proof faculties. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
        />
        <ul className='grid md:grid-cols-3 md:gap-10'>
          {faculties.map((faculty) => (
            <li key={faculty.id}>
              <div className='bg-white p-8 rounded-lg shadow-sm transition hover:bg-brand-100 hover:text-white h-40 flex justify-center items-center text-center'>
                <Image
                  src={`/images/${faculty.image}`}
                  alt={faculty.title}
                  width={200}
                  height={150}
                />
                <h2 className='text-xl font-semibold ml-3'>{faculty.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Faculty;
