import {PropsWithChildren, ReactNode} from 'react';
import {Button, Dialog, Modal, Portal, Text} from 'react-native-paper';

type props = {
  visible: boolean | undefined;
  title: string | undefined;
  description: string | undefined;
  onDismiss: () => void | undefined;
  onAgree: () => void | undefined;
  onDisagree: () => void | undefined;
};

const CustomDialog = ({
  visible = false,
  title,
  description,
  onDismiss,
  onAgree,
  onDisagree,
}: props): JSX.Element => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{description}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onAgree}>Yes</Button>
          <Button onPress={onDisagree}>No</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomDialog;
