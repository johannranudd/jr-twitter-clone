export const initialState = {
  dark: {
    foreground: '#fff',
    background: '#000',
  },
  light: {
    foreground: '#000',
    background: '#fff',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      const localData = localStorage.getItem('mode')
        ? JSON.parse(localStorage.getItem('mode'))
        : null;
      if (!localData) {
        const jsonDarkMode = JSON.stringify(state.dark);
        localStorage.setItem('mode', jsonDarkMode);
      }

      const localDataInitial = localStorage.getItem('mode')
        ? JSON.parse(localStorage.getItem('mode'))
        : null;

      document.body.style.backgroundColor = localDataInitial.background;
      document.body.style.color = localDataInitial.foreground;

      if (localDataInitial.background === '#fff') {
        action.payload.current.style.transform = `translateY(-50px)`;
      } else {
        action.payload.current.style.transform = `translateY(0px)`;
      }

      return state;
    case 'DARK':
      const jsonDarkMode = JSON.stringify(state.dark);
      localStorage.setItem('mode', jsonDarkMode);

      const localDataDark = localStorage.getItem('mode')
        ? JSON.parse(localStorage.getItem('mode'))
        : null;

      document.body.style.backgroundColor = localDataDark.background;
      document.body.style.color = localDataDark.foreground;

      action.payload.current.style.transform = `translateY(0px)`;
      return state;

    case 'LIGHT':
      const jsonLightMode = JSON.stringify(state.light);
      localStorage.setItem('mode', jsonLightMode);

      const localDataLight = localStorage.getItem('mode')
        ? JSON.parse(localStorage.getItem('mode'))
        : null;

      document.body.style.backgroundColor = localDataLight.background;
      document.body.style.color = localDataLight.foreground;

      action.payload.current.style.transform = `translateY(-50px)`;
      return state;

    default:
      return state;
  }
};
