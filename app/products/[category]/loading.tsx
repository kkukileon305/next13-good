const ProductsLoading = () => {
  return (
    <div className='bg-gray-600 pt-4'>
      <div className='w-1/2 h-[40px] rounded bg-gray-500 ml-4 mb-4' />
      <div className='flex flex-wrap gap-4 p-4'>
        <div className='w-[calc((100%-16px)/2)] p-4 aspect-[1/1.2] border border-transparent  rounded select-none bg-gray-500' />
        <div className='w-[calc((100%-16px)/2)] p-4 aspect-[1/1.2] border border-transparent  rounded select-none bg-gray-500' />
        <div className='w-[calc((100%-16px)/2)] p-4 aspect-[1/1.2] border border-transparent  rounded select-none bg-gray-500' />
        <div className='w-[calc((100%-16px)/2)] p-4 aspect-[1/1.2] border border-transparent  rounded select-none bg-gray-500' />
        <div className='w-[calc((100%-16px)/2)] p-4 aspect-[1/1.2] border border-transparent  rounded select-none bg-gray-500' />
      </div>
    </div>
  );
};

export default ProductsLoading;
