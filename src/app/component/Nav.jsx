import Image from 'next/image'
import navlogo from '../asset/navlogo.png'

const Nav = () => {
  return (
    <>
    <div className='nav-wrap'>
        <Image 
        src={navlogo} alt='phoneGeek' className='nav-logo'/>
    </div>
    </>
  )
}

export default Nav