import React, { useState, forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import { Modal as RNModal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalRefProps } from './types';

export const useModalRef = () => useRef({} as ModalRefProps);

export const Modal = forwardRef<ModalRefProps, { children: React.ReactNode }>((props, ref) => {
  const [visible, setVisible] = useState(false);

  const _open = useCallback(() => setVisible(true), []);
  const _close = useCallback(() => setVisible(false), []);

  useImperativeHandle(ref, () => ({ open: _open, close: _close }));

  return (
    <RNModal transparent visible={visible} animationType="slide">
      {props.children}
    </RNModal>
  );
});
