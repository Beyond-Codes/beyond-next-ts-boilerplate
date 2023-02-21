import React from 'react';
import Icon from '@/components/misc/Icon';
import { usePopup } from '@/contexts/Popup.context';

function AlertPopup(): JSX.Element | null {
  const { alertPopup, deactivateAlertPopup } = usePopup();

  const containerClass = alertPopup?.isActive
    ? 'visible opacity-100'
    : 'invisible opacity-0';

  const popupClass = alertPopup?.isActive
    ? 'visible translate-y-0 opacity-100 delay-300'
    : 'invisible translate-y-10 opacity-0 delay-100';

  return (alertPopup?.inHTML && (
    <div
      className={`${containerClass} fixed left-0 top-0 z-[9998] flex h-full w-full items-center justify-center overflow-hidden bg-black/70 p-5 transition-all delay-200 duration-300`}
    >
      <div
        className={`${popupClass} grid h-96 max-h-fit w-full max-w-md grid-cols-1 place-content-start place-items-center gap-10 rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-xl transition-all duration-300`}
      >
        <span key={alertPopup.status} className="default-fade-in">
          <Icon iconName={alertPopup.status} />
        </span>
        <p
          key={alertPopup.text}
          className="default-zoom-in text-center text-sm text-zinc-300"
        >
          {alertPopup.text}
        </p>
        <button
          disabled={alertPopup?.status === 'loading'}
          className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
          type="button"
          onClick={deactivateAlertPopup}
        >
          Tamam
        </button>
      </div>
    </div>
  )) as JSX.Element | null;
}

export default AlertPopup;
