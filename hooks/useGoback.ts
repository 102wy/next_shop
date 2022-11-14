import { useRouter } from 'next/router';
import { useCallback } from 'react';
export const useGoback = () => {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  return goBack;
};
