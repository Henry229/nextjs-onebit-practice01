export default function Practice() {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor='name' className='block text-lg font-medium text-gray-700'>
        Name
      </label>
      <div className='flex flex-col md:flex-row gap-2'>
        <input
          type='text'
          id='name'
          className='w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md whitespace-nowrap'>
          Search
        </button>
      </div>
    </div>
  );
}
