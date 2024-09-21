import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>
        {/* Logo or other header items */}
        <h1>My Website</h1>
      </div>
      <div>
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </header>
  );
}
