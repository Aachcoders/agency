declare module 'react-intersection-observer' {
    import { FC } from 'react';
  
    export const useInView: (options?: any) => { ref: any; inView: boolean };
  }