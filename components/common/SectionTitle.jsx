function SectionTitle({ title, subtitle }) {
  return (
    <div className='max-w-2xl mx-auto text-center mb-10'>
      <h2 className='text-3xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-100 z-10'>
        {title}
      </h2>
      {subtitle && <p className='text-sm text-gray-600'>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
