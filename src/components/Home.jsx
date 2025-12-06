import { useEffect, useState } from "react";
import { TweetForm } from "./TweetForm";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

export const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Modal isOpen={open}>
        <ModalContent>
          <ModalHeader>WARNING! plz read</ModalHeader>
          <ModalBody>
            <p>
              Due to technicality it can only automate 15 tweets / 24 hour so
              please note each person can only tweet once.
            </p>
            <p>
              Also I did not implement any blocking systems so technically you
              can tweet until it reaches the limit since I won't know which user
              does what.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => setOpen(false)}>
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TweetForm />
    </>
  );
};

export default Home;
