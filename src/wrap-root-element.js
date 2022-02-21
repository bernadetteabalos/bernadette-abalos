/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, ColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index.js'

export const wrapRootElement = ({ element }) => {
  return (
      <ThemeProvider theme={theme}>
        <ColorMode>
          {element}
        </ColorMode>
      </ThemeProvider>
  )
}