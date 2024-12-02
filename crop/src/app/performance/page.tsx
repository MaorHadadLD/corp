import homeImg from '../../../public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
    return (
    <Hero 
        imgData={homeImg} 
        imgAlt="welding" 
        title="We serve high performance applications" 
      />
    );
    
}