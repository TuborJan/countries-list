import ThemeChangeButton from "./ThemeChangeButton";

export const Header = () => {
  return (
    <header className="px-2 dark:bg-darkBlue">
      <div className="container flex items-center justify-between max-w-screen-mobile tablet:max-w-screen-tablet laptop:max-w-screen-laptop desktop:max-w-screen-desktop h-16">
        <h1 className="font-bold">Where in the world?</h1>
        <ThemeChangeButton />
      </div>
    </header>
  );
};
