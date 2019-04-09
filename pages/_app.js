import React, { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import App, { Container } from 'next/app'
import theme from '../config/theme'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`

class AxiomApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles theme={theme} />
            <Component />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default AxiomApp
