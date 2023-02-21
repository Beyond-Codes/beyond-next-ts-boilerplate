import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePopup } from '@/contexts/Popup.context';
import Wait from '@/common/utils/Wait.util';

function Popups() {
  const { activateAlertPopup, activateConfirmPopup, deactivateConfirmPopup } =
    usePopup();
  return (
    <>
      <Meta
        title="Beyond | Popups"
        description="Popup controls of Beyond NextTS Template"
      />
      <Header />
      <main className="default-fade-in m-0 mt-[100px] flex min-h-screen w-full items-start justify-center bg-[#101010] p-0">
        <section className="mt-20 grid w-full max-w-theme grid-cols-1 place-content-start place-items-start gap-5 p-5">
          <h1 className="text-3xl text-zinc-300">Popups</h1>
          <p className="text-left text-sm text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section className="flex flex-col items-start justify-start gap-5">
            <h2 className="text-xl text-zinc-400">Examples</h2>
            <div className="flex w-fit max-w-[24rem] flex-wrap items-start justify-start gap-5 rounded-md border border-zinc-900 p-5">
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => {
                  activateAlertPopup('Sent successfully!', 'success');
                }}
              >
                Success
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => {
                  activateAlertPopup("It's may take a while.", 'info');
                }}
              >
                Info
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => {
                  activateAlertPopup('An error occured.', 'error');
                }}
              >
                Error
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  activateAlertPopup('Sending your form..', 'loading');
                  await Wait(2000);
                  activateAlertPopup('Your form sent successfully!', 'success');
                }}
              >
                Loading then Success
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  activateAlertPopup('Saving settings..', 'loading');
                  await Wait(2000);
                  activateAlertPopup('Settings saved, please check.', 'info');
                }}
              >
                Loading then Info
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  activateAlertPopup('Sending your form..', 'loading');
                  await Wait(2000);
                  activateAlertPopup(
                    'An error occured while sending form.',
                    'error'
                  );
                }}
              >
                Loading then Error
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  activateConfirmPopup('Are you sure want to exit?');
                }}
              >
                Confirm Default
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  const onConfirm = async () => {
                    deactivateConfirmPopup();
                    activateAlertPopup('Loading..', 'loading');
                    await Wait(2000);
                    activateAlertPopup('Success!', 'success');
                  };

                  activateConfirmPopup('Are you sure want to exit?', onConfirm);
                }}
              >
                Confirm with Alert Success
              </button>
              <button
                type="button"
                className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                onClick={async () => {
                  const onConfirm = async () => {
                    deactivateConfirmPopup();
                    activateAlertPopup('Loading..', 'loading');
                    await Wait(2000);
                    activateAlertPopup('An error occured.', 'error');
                  };

                  activateConfirmPopup('Are you sure want to exit?', onConfirm);
                }}
              >
                Confirm with Alert Error
              </button>
            </div>
            <p className="text-left text-sm text-zinc-500">
              and much more, it&apos;s up to you.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Popups;
