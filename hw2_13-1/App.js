import AboutUs from "./pages/AboutUs/AboutUs";

const product = () => {
    return {
        name: "Elina",
        last_name: "Beishenalieva",
        number: 1234567890,
    };
};

function App() {
    return (
        <div>
            <AboutUs text='text about us' product={product} />
        </div>
    );
}
export default App;
