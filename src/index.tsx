import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import { store } from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n('en')}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)

reportWebVitals()
