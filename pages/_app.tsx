import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from 'next/app';  // 导入AppProps类型

function MyApp({ Component, pageProps }: AppProps) {  // 使用AppProps类型
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
