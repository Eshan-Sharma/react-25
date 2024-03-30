import useLocalStorage from "./useLocalStorage";

export default function ThemeChange() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div
      className={`light-dark-mode ${
        theme === "light" ? "bg-white dark:bg-black" : "bg-black dark:bg-white"
      } min-h-screen flex flex-col justify-center items-center text-2xl transition-all duration-500`}
    >
      <div className="container flex flex-col justify-center items-center gap-6">
        <p
          className={`${theme === "light" ? "text-black" : "text-white"} ${
            theme === "light" ? "dark:text-white" : "dark:text-black"
          } text-5xl`}
        >
          Hello, world!
        </p>
        <button
          onClick={handleToggleTheme}
          className={`bg-black dark:bg-white border border-black dark:border-white text-white dark:text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300`}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
}
