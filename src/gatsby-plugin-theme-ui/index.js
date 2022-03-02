const theme = {
  initialColorModeName: 'light',
  colors: {
    text: "#25282b",
    background: "#F6EFDB",
    primary: "#25282b",
    secondary: "#F6EFDB",
    modes: {
      dark: {
        text: '#F2BEA6',
        background: '#25282b',
        primary: '#cfcfcf',
        secondary: '#25282b'

      }
    }
  },
  styles: {
    a: {
      color: "#DC8580",
      '&:hover': {
        opacity: 0.65

      }
    }
  }
}

export default theme;