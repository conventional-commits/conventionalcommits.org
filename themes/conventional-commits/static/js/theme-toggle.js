class ThemeToggle {
  constructor() {
    this.init();
  }

  init() {
    this.applyStoredTheme();
    this.addEventListeners();
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme) {
    const html = document.documentElement;
    html.classList.remove('theme-light', 'theme-dark');

    if (theme) {
      html.classList.add(`theme-${theme}`);
    } else {
      // No stored preference, use system preference
      const systemTheme = this.getSystemTheme();
      if (systemTheme === 'dark') {
        html.classList.add('theme-dark');
      }
    }
  }

  applyStoredTheme() {
    const storedTheme = this.getStoredTheme();
    this.applyTheme(storedTheme);
  }

  toggle() {
    const storedTheme = this.getStoredTheme();
    const effectiveTheme = storedTheme || this.getSystemTheme();
    const newTheme = effectiveTheme === 'dark' ? 'light' : 'dark';

    this.setStoredTheme(newTheme);
    this.applyTheme(newTheme);
    this.updateToggleButton();
  }

  updateToggleButton() {
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      const theme = this.getStoredTheme();
      const isCurrentlyDark = theme === 'dark' || (!theme && this.getSystemTheme() === 'dark');

      // SVG icons for better cross-platform consistency
      const sunIcon = '<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      const moonIcon = '<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

      const icon = isCurrentlyDark ? sunIcon : moonIcon;
      const title = `Switch to ${isCurrentlyDark ? 'light' : 'dark'} mode`;

      button.innerHTML = icon;
      button.title = title;
    }
  }

  addEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateToggleButton();

      const button = document.querySelector('[data-theme-toggle]');
      if (button) {
        button.addEventListener('click', () => this.toggle());
      }
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!this.getStoredTheme()) {
        this.applyStoredTheme();
        this.updateToggleButton();
      }
    });
  }
}

export default ThemeToggle;
