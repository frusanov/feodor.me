import { Metadata } from 'next'
import { IndexPageClient } from './client';
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
 
export default function IndexPage() {
  return (
    <IndexPageClient />
  );
}