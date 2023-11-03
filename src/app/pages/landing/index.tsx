import TwitterLoginButton from '../../components/button/TwitterLogin';

const Landing = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("/assets/images/background/bg_lp_desk.jpg")] bg-[length:100%_100%] max-sm:bg-[url("/assets/images/background/bg_lp_mobile.png")] flex justify-center items-center'>
      <div className='flex flex-col gap-4 max-sm:gap-10 text-center'>
        <h1 className='sm:hidden text-[27.11px] font-extrabold leading-[69.91px] text-white'>Stars Arena</h1>
        <div className='flex justify-center'>
          <img src="/assets/images/icons/logo.png" alt="" className='w-[305.37px] h-[291.97px] max-sm:w-[210px] max-sm:h-[210px]' />
        </div>
        <h1 className='max-sm:hidden font-bold text-[55px] max-md:text-[40px] leading-[71px] text-white'>
          <span className='text-4xl bg-gradient-to-b from-[#5454C8] to-[#8689F3] bg-clip-text text-transparent'>The Sahara </span>
          - The Future of the <br /> Creator Economy
        </h1>
        <h3 className='max-sm:hidden text-[18px] font-medium leading-[23.4px] text-[#DADADA]'>Join today!</h3>
        <h3 className='sm:hidden font-normal text-[18.07px] leading-[21.87px] text-white text-center'>
          SHARE-INPIRE-CONNECT
        </h3>
        <div className='flex flex-row justify-center'>
          <TwitterLoginButton />
        </div>
      </div>
    </div>
  )
}

export default Landing