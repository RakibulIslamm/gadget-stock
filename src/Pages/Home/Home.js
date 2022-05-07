import BrandSection from '../BrandSection/BrandSection';
import useAuth from '../../hooks/useAuth';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    const { user, isLoading } = useAuth();

    return (
        <div className=''>
            <Banner />
            <Inventory />
            <NewsLetter />
            <BrandSection />
        </div>
    );
};

export default Home;