
export const Header = ({ scroll }) => {
  return (
    <>
      <div className='absolute top-8 left-8 z-10 flex'>
        <div className="w-24 flex-1">
          <img src='./scglogo.png' alt='' />
        </div>
      </div>
      <div className='absolute right-8 top-8 z-10 flex space-x-4 '>
        <div className="cursor-pointer hover:text-red-400 hover:underline transition-all duration-500"
          onClick={() => scroll(-2)}
        >
          Home
        </div>
        <div className="cursor-pointer hover:text-red-400 hover:underline transition-all duration-500"
          onClick={() => scroll(2)}
        >
          About
        </div>
      </div>
    </>
  )
}