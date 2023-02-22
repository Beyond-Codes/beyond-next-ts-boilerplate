import React from 'react';
import type { AppProps } from 'next/app';
import PopupWrapper from '@/contexts/Popup.context';
import AlertPopup from '@/components/popups/Alert.popup';
import LanguageWrapper from '@/contexts/Language.context';
import ConfirmPopup from '@/components/popups/Confirm.popup';

// ? Global styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageWrapper>
      <PopupWrapper>
        <AlertPopup />
        <ConfirmPopup />
        <Component {...pageProps} />
      </PopupWrapper>
    </LanguageWrapper>
  );
}
