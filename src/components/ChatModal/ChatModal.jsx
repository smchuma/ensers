import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ChatModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children && <span onClick={onOpen}>{children}</span>}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay backdropFilter="blur(1px) hue-rotate(90deg)" />
        <ModalContent
          style={{
            background: "rgba(242, 242, 242)",
          }}
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>sss</h1>
          </ModalBody>
          <ModalFooter>
            <Input />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatModal;
