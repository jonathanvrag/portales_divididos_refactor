import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
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
    <div>
      <Header />
      <GridLayaout />
    </div>
  );
}
