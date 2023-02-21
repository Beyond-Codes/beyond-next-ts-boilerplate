import React from 'react';
import { usePopup } from '@/contexts/Popup.context';
import Icon from '@/components/misc/Icon';

function ConfirmPopup(): JSX.Element | null {
  const [popupText, setPopupText] = React.useState('');
  const { confirmPopup, deactivateConfirmPopup } = usePopup();

  React.useEffect(() => {
    if (confirmPopup && confirmPopup.text?.length > 0)
      setPopupText(confirmPopup.text);
  }, [confirmPopup?.text]);

  const containerClass = confirmPopup?.isActive
    ? 'visible opacity-100'
    : 'invisible opacity-0';

  const popupClass = confirmPopup?.isActive
    ? 'visible translate-y-0 opacity-100 delay-300'
    : 'invisible translate-y-10 opacity-0 delay-100';

  return (confirmPopup?.inHTML && (
    <div
      className={`${containerClass} fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-black/70 p-5 transition-all delay-200 duration-300`}
    >
      <div
        className={`${popupClass}
        grid h-96 max-h-fit w-full max-w-md grid-cols-1 place-content-start place-items-center gap-10 rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-xl transition-all duration-300`}
      >
        <Icon iconName="info" />
        <p
          key={popupText}
          className="default-zoom-in text-center text-sm text-zinc-300"
        >
          {popupText}
        </p>
        <div className="flex w-full items-center justify-center gap-5">
          <button
            className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={confirmPopup.onConfirm || deactivateConfirmPopup}
          >
            Yes
          </button>
          <button
            className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={confirmPopup.onCancel || deactivateConfirmPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )) as JSX.Element | null;
}

export default ConfirmPopup;
