import { useState } from 'react';
import NOTICE from '../../data/notice';
import { dateLayout, formatDate } from '../../utils/format-date';
import SectionTitle from '../common/SectionTitle';

function Notice() {
  const [notices, setNotices] = useState(NOTICE);

  return (
    <section className='bg-gray-50 py-10'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Notices'
          subtitle='Get update with our latest information through notice. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
        />
        <ul>
          {notices.map((notice) => (
            <li key={notice.id}>
              <div className='mb-10 flex items-center'>
                <div
                  className={`bg-brand text-white p-4 w-80 mr-10 ml-10 uppercase flex flex-col justify-center items-center rounded-lg ${
                    notice.id % 2 !== 0 ? 'order-1' : ''
                  }`}
                >
                  <small>{dateLayout(formatDate(notice.date)).day}</small>
                  <p className='text-xl font-semibold my-1 tracking-wider'>
                    {dateLayout(formatDate(notice.date)).monthDate}
                  </p>
                  <small>{dateLayout(formatDate(notice.date)).year}</small>
                </div>
                <div className='bg-white p-4 '>
                  <h2 className='font-semibold mb-2'>{notice.title}</h2>
                  <p className='text-sm text-gray-600'>{notice.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Notice;
