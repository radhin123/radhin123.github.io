import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import MarketCorrelationMatrix from '../components/correlation-matrix/marketCorrelationMatrix'

const CorrelationMatrixPage = () => {
  return (
    <StylesProvider injectFirst>
      <MarketCorrelationMatrix />
    </StylesProvider>
  )
}

export default CorrelationMatrixPage
