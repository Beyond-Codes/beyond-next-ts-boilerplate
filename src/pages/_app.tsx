import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PopupWrapper from '@/contexts/Popup.context';
import AlertPopup from '@/components/popups/Alert.popup';
import ConfirmPopup from '@/components/popups/Confirm.popup';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PopupWrapper>
      <AlertPopup />
      <ConfirmPopup />
      <Component {...pageProps} />
    </PopupWrapper>
  );
}
