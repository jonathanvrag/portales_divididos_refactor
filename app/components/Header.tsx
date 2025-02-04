import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 text-white h-32 ' style={{ backgroundColor: 'rgba(8, 31, 45, 1)' }}>
      <h1 className='text-2xl font-bold'>Centro de Monitoreo La Valeria, Antioquia</h1>
      <img src={logo} alt="Logo de SIATA" className='w-56 h-20 ml-4' />
    </div>
  );
}
