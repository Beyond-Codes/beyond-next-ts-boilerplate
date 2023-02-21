import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BsCheckCircleFill, BsExclamationCircleFill } from 'react-icons/bs';

function Icon({ iconName }: { iconName: string }): JSX.Element {
  const getIcon = () => {
    switch (iconName) {
      case 'loading':
        return (
          <AiOutlineLoading className="h-9 w-9 animate-spin rounded-full bg-sky-500/20 p-2 text-sky-500" />
        );

      case 'success':
        return (
          <BsCheckCircleFill className="h-9 w-9 rounded-full bg-green-500/20 p-2 text-green-500" />
        );

      case 'error':
        return (
          <BsExclamationCircleFill className="h-9 w-9 rounded-full bg-red-500/20 p-2 text-red-500" />
        );

      default:
        return (
          <BsExclamationCircleFill className="h-9 w-9 rounded-full bg-slate-500/20 p-2 text-slate-400" />
        );
    }
  };

  return <div className="flex items-center justify-center">{getIcon()}</div>;
}

export default Icon;
