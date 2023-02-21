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
  });

  const [confirmPopup, setConfirmPopup] = React.useState<ConfirmPopupType>({
    inHTML: false,
    isActive: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  });

  const activateAlertPopup: (
    text: string,
    status: PopupStatusTypes
  ) => Promise<void> = async (text, status) => {
    setAlertPopup({
      inHTML: true,
      isActive: false,
      status,
      text,
    });

    await Wait(50);
    setAlertPopup({
      inHTML: true,
      isActive: true,
      status,
      text,
    });
  };

  const deactivateAlertPopup: () => Promise<void> = async () => {
    setAlertPopup({
      ...alertPopup,
      isActive: false,
    });
    await Wait(500);
    setAlertPopup({
      inHTML: false,
      isActive: false,
      status: 'loading',
      text: '',
    });
  };

  const activateConfirmPopup: (
    text: string,
    onConfirm?: () => void,
    onCancel?: () => void
  ) => Promise<void> = async (text, onConfirm, onCancel) => {
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
  };

  const deactivateConfirmPopup: () => Promise<void> = async () => {
    setConfirmPopup({
      inHTML: true,
      isActive: false,
      text: '',
      onConfirm: () => {},
      onCancel: () => {},
    });
    await Wait(500);
    setConfirmPopup({
      inHTML: false,
      isActive: false,
      text: '',
      onConfirm: () => {},
      onCancel: () => {},
    });
  };

  const value: PopupContextType = React.useMemo(
    () => ({
      alertPopup,
      confirmPopup,
      activateAlertPopup,
      deactivateAlertPopup,
      activateConfirmPopup,
      deactivateConfirmPopup,
    }),
    [
      alertPopup,
      confirmPopup,
      activateAlertPopup,
      deactivateAlertPopup,
      activateConfirmPopup,
      deactivateConfirmPopup,
    ]
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
