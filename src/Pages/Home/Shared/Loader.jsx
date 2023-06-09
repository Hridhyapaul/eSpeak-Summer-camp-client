import { RiseLoader } from 'react-spinners'

const Loader = () => {
    const color = "#082A5E"
  return (
    <div
      className='
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <RiseLoader size={20} color={color} />
    </div>
  )
}

export default Loader