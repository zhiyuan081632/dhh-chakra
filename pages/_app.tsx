// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;