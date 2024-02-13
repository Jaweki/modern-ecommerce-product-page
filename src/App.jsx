import Header from "./components/Header";
import ItemPreview from "./components/ItemPreview";
import MainDisplay from "./components/MainDisplay";
import MobileNavigation from "./components/MobileNavigation";

function App() {

  return (
    <main>
      <div className="w-screen h-screen lg:px-20 sm:px-15 flex flex-col items-center z-0 relative transition-all duration-300 ease-in-out ">
        <Header />
        <MainDisplay />
        <ItemPreview />
        <MobileNavigation />
        <div className="text-sm w-full text-center">
          Coding Challenge by{" "}
          <a href="https://www.frontendmentor.io/home" className="text-blue-700 underline" target="_blank" rel="noreferrer">Frontend Mentor</a>
          coded by:
          <a href="https://portfolio.jaweki.com" className=" text-blue-700 underline" target="_blank" rel="noreferrer">Jaweki</a>
          and
          <a href="https://www.linkedin.com/in/benhurst1" className=" text-blue-700 underline" target="_blank" rel="noreferrer">Ben Hurst</a>
        </div>
      </div>
    </main>
  );
}

export default App;
