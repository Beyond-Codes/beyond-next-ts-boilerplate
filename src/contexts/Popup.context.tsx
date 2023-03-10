import React from 'react';
import Wait from '@/common/utils/Wait.util';
import {
  AlertPopupType,
  ConfirmPopupType,
  PopupContextType,
  PopupStatusTypes,
} from '@/types/popup.types';

const PopupContext = React.createContext<PopupContextType>({
  alertPopup: null,
  confirmPopup: null,
  activateAlertPopup: () => {},
  deactivateAlertPopup: () => {},
  activateConfirmPopup: () => {},
  deactivateConfirmPopup: () => {},
});

export default function PopupWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [alertPopup, setAlertPopup] = React.useState<AlertPopupType>({
    inHTML: false,
    isActive: false,
    status: 'loading',
    text: '',
    onConfirm: () => {},
  });

  const [confirmPopup, setConfirmPopup] = React.useState<ConfirmPopupType>({
    inHTML: false,
    isActive: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  });

  const deactivateAlertPopup = React.useCallback(async () => {
    setAlertPopup((prev) => ({
      ...prev,
      isActive: false,
    }));

    await Wait(500);
    setAlertPopup({
      inHTML: false,
      isActive: false,
      status: 'loading',
      text: '',
    });
  }, [alertPopup]);

  const activateAlertPopup = React.useCallback(
    async (text: string, status: PopupStatusTypes, onConfirm?: () => void) => {
      setAlertPopup({
        inHTML: true,
        isActive: false,
        status,
        text,
        onConfirm,
      });

      await Wait(50);
      setAlertPopup({
        inHTML: true,
        isActive: true,
        status,
        text,
        onConfirm,
      });
    },
    [alertPopup]
  );

  const activateConfirmPopup = React.useCallback(
    async (text: string, onConfirm?: () => void, onCancel?: () => void) => {
      setConfirmPopup({
        inHTML: true,
        isActive: false,
        text,
        onConfirm,
        onCancel,
      });

      await Wait(50);
      setConfirmPopup({
        inHTML: true,
        isActive: true,
        text,
        onConfirm,
        onCancel,
      });
    },
    [confirmPopup]
  );

  const deactivateConfirmPopup = React.useCallback(async () => {
    setConfirmPopup((prev) => ({
      ...prev,
      isActive: false,
    }));

    await Wait(500);
    setConfirmPopup({
      inHTML: false,
      isActive: false,
      text: '',
      onConfirm: () => {},
      onCancel: () => {},
    });
  }, [confirmPopup]);

  const value: PopupContextType = React.useMemo(
    () => ({
      alertPopup,
      confirmPopup,
      activateAlertPopup,
      deactivateAlertPopup,
      activateConfirmPopup,
      deactivateConfirmPopup,
    }),
    [alertPopup, confirmPopup]
  );

  React.useEffect(() => {
    if (alertPopup.isActive || confirmPopup.isActive) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [alertPopup, confirmPopup]);

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
}

export function usePopup(): PopupContextType {
  const context = React.useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupWrapper');
  }
  return context;
}
