import React from 'react';
import Meta from '@/components/layout/Meta';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePopup } from '@/contexts/Popup.context';
import Wait from '@/common/utils/Wait.util';
import { useIntl } from 'react-intl';

function Popups() {
  const { formatMessage: t } = useIntl();
  const { activateAlertPopup, activateConfirmPopup, deactivateConfirmPopup } =
    usePopup();
  return (
    <>
      <Meta
        title="Popups | Beyond Next.JS TypeScript Boilerplate"
        description="The context-based approach enables seamless integration of popup components, making it easy to integrate into your project."
      />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className=" max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          {t({ id: 'popups.heading' })}
        </h1>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-10 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'popups.description' })}
        </p>

        <h2 className="mt-10 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-3xl">
          {t({ id: 'popups.examples.heading' })}
        </h2>
        <ul className="flex w-fit max-w-[24rem] flex-wrap items-start justify-center gap-5 rounded-md px-5">
          <li>
            <button
              type="button"
              className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                activateAlertPopup('Sent successfully!', 'success');
              }}
            >
              Success
            </button>
          </li>
          <li>
            <button
              type="button"
              className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                activateAlertPopup("It's may take a while.", 'info');
              }}
            >
              Info
            </button>
          </li>
          <li>
            <button
              type="button"
              className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                activateAlertPopup('An error occured.', 'error');
              }}
            >
              Error
            </button>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <button
              type="button"
              className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
              onClick={async () => {
                activateConfirmPopup('Are you sure want to exit?');
              }}
            >
              Confirm Default
            </button>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
        <p className="text-left text-sm text-zinc-500">
          {t({ id: 'popups.examples.last-text' })}
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Popups;
