import useLocalStorage from "./useLocalStorage";

export default function ThemeChange() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="">
      <div className="ml-2 pl-2">Hello world</div>
      <button
        onClick={handleToggleTheme}
        className="ml-2 pl-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Change Theme
      </button>
    </div>
  );
}
