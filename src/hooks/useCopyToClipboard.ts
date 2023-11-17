import  { useState } from "react";

const useCopyToClipboard = (valueToCopy: string) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const isSupported = navigator.clipboard && navigator.clipboard.writeText;
    //@ts-ignore default
    if (isSupported) {
      navigator.clipboard.writeText(valueToCopy).then(() => {
        setCopied(true);
      });
    } else {
      // Fallback to old method
      document.execCommand("copy", false, valueToCopy);
      setCopied(true);
    }
  };

  return {
    copied,
    copy,
  };
}

export default useCopyToClipboard