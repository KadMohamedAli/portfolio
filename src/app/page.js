// app/page.js
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/en'); // or '/fr' or based on preferred language
}
