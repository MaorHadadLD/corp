import homeImg from '../../../public/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliabilityPage() {
    return (
    <Hero 
        imgData={homeImg} 
        imgAlt="welding" 
        title="Super high reliability hosting" 
      />
    );
    
}