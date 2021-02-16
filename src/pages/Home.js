import logo from "../logo.svg";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <img src={logo} className="animate-spin h-60 w-60" alt="logo" />
      <p className="text-sm font-light text-gray-700 p-4 text-center">
        Made whit{" "}
        <a
          className="text-blue-400 hover:shadow-lg"
          href="https://create-react-app.dev/docs/getting-started/"
        >
          create-react-app
        </a>{" "}
        and{" "}
        <a
          className=" text-blue-400 hover:shadow-lg"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS.
        </a>
        <br/> 
        <a
        className="text-xs text-blue-400 hover:shadow-lg"
        href="https://github.com/JDK-93"
      >
        JDK-93
      </a>
      </p>
      
    </div>
  );
};
export default Home;
