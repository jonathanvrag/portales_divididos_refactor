import type { Route } from './+types/home';
import Header from 'app/components/Header';
import GridLayaout from '~/components/GridLayaout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Portales divididos' },
    { name: 'description', content: 'Portales divididos' },
  ];
}

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <GridLayaout />
      </main>
    </div>
  );
}
