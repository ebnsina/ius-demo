import SectionTitle from '../common/SectionTitle';
import YouTube from 'react-youtube';

const videos = [
  { id: 'FJJ-VFD8Rio' },
  { id: 'lJ0lLBfXt6Q' },
  { id: 'whxak0Pb2BI' },
  { id: 'rWbCM6-DAj0' },
  { id: 'CmOvDrTpkRc' },
  { id: 'gw45fgua3G8' },
];

function Education() {
  const opts = {
    height: 'auto',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Our Virtual Class'
          subtitle='See & Explore our virtual class and enjoy the education. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
        />

        <div className='grid md:grid-cols-3 md:gap-6'>
          {videos.map((video) => (
            <YouTube
              className='aspect-video'
              videoId={video.id}
              opts={opts}
              onReady={onReady}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
