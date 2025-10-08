import Banner from "../../Components/HomeComponents/Banner";
import Hero from "../../Components/HomeComponents/Hero";
import useApps from "../../Hooks/useApps";


const Home = () => {

    let {apps} = useApps();
    console.log(apps);

    return (
        <div className="">
            
            <Banner></Banner>
            <Hero></Hero>
        </div>
    );
};

export default Home;