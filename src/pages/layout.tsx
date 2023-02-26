import Wait from '@/common/utils/Wait.util';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Meta from '@/components/layout/Meta';
import { useLanguage } from '@/contexts/Language.context';
import { usePopup } from '@/contexts/Popup.context';
import React from 'react';
import { useIntl } from 'react-intl';

function PopupActivator({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[90px] rounded-md bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function Layout() {
  const { formatMessage: t } = useIntl();
  const { changeLanguage } = useLanguage();
  const { activateAlertPopup, activateConfirmPopup, deactivateConfirmPopup } =
    usePopup();
  return (
    <>
      <Meta
        title="Layout | Beyond Next.JS TypeScript Boilerplate"
        description="Includes a layout feature that includes expandable components: i18n and popup wrapper and more."
      />
      <Header />
      <main className="default-fade-in mt-[100px] grid min-h-screen w-full grid-cols-1 place-content-start place-items-center gap-5 bg-[#101010] p-5 pt-[100px] font-theme">
        <h1 className="max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-4xl text-transparent lg:text-5xl">
          {t({ id: 'layout.heading' })}
        </h1>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-5 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'layout.description' })}
        </p>
        <h2 className="mt-20 max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-3xl text-transparent lg:text-4xl">
          {t({ id: 'layout.multilingual.heading' })}
        </h2>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-5 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'layout.multilingual.description' })}
        </p>
        <h3 className="mt-5 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-2xl">
          {t({ id: 'layout.multilingual.example.heading' })}
        </h3>
        <section className="flex items-center justify-center">
          <button
            onClick={() => {
              changeLanguage('en');
            }}
            className="min-w-[90px] rounded-l-md border-r border-r-zinc-900 bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
          >
            EN
          </button>
          <button
            onClick={() => {
              changeLanguage('tr');
            }}
            className="min-w-[90px] rounded-r-md border-l border-l-zinc-900 bg-white/10 px-4 py-1 text-center text-sm text-zinc-300 transition-all duration-150 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
            type="button"
          >
            TR
          </button>
        </section>
        <h2 className="mt-10 max-w-sm bg-gradient-to-br from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-3xl text-transparent lg:text-4xl">
          {t({ id: 'layout.popups.heading' })}
        </h2>
        <p
          style={{
            textAlignLast: 'center',
          }}
          className="mt-5 max-w-lg text-justify text-base text-zinc-500"
        >
          {t({ id: 'layout.popups.description' })}
        </p>
        <h3 className="mt-5 bg-gradient-to-b from-zinc-200 to-zinc-700 bg-clip-text p-1 text-center text-xl text-transparent lg:text-2xl">
          {t({ id: 'layout.popups.examples.heading' })}
        </h3>
        <ul className="flex w-fit max-w-[24rem] flex-wrap items-start justify-center gap-5 rounded-md px-5">
          <li>
            <PopupActivator
              onClick={() => {
                activateAlertPopup('Sent successfully!', 'success');
              }}
            >
              Success
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
              onClick={() => {
                activateAlertPopup("It's may take a while.", 'info');
              }}
            >
              Info
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
              onClick={() => {
                activateAlertPopup('An error occured.', 'error');
              }}
            >
              Error
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
              onClick={async () => {
                activateAlertPopup('Sending your form..', 'loading');
                await Wait(2000);
                activateAlertPopup('Your form sent successfully!', 'success');
              }}
            >
              Loading then Success
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
              onClick={async () => {
                activateAlertPopup('Saving settings..', 'loading');
                await Wait(2000);
                activateAlertPopup('Settings saved, please check.', 'info');
              }}
            >
              Loading then Info
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
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
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
              onClick={async () => {
                activateConfirmPopup('Are you sure want to exit?');
              }}
            >
              Confirm Default
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
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
            </PopupActivator>
          </li>
          <li>
            <PopupActivator
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
            </PopupActivator>
          </li>
        </ul>
        <p className="mb-32 text-left text-sm text-zinc-500">
          {t({ id: 'layout.popups.examples.last-text' })}
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
