import { useState, useEffect } from 'react';

const useAbortController = () => {
  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  const abort = () => {
    if (controller) {
      controller.abort();
    }
    const newController = new AbortController();
    setController(newController);
    return newController;
  };

  return abort;
};

export default useAbortController;
