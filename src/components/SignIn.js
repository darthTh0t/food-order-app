import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/Firebase";
import { motion } from "framer-motion";
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  //authenticate with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userName = result.user.displayName.split(" ");
        sessionStorage.setItem("firstName", userName[0]);
        sessionStorage.setItem("emailVerified", result.user.emailVerified);
        return result.user.emailVerified;
      })
      .then((emailVerified) => {
        if (emailVerified) {
          return onOpen();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="buttonNext"
      >
        <Button
          as={motion.button}
          colorScheme="twitter"
          variant={"outline"}
          whileHover={{ scale: 1.2 }}
          boxShadow={"dark-lg"}
          py={2}
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <p className="text-xl text-amber-900">Sign Up With Google!</p>
        </Button>
        {sessionStorage.getItem("emailVerified") && (
          <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
            <ModalOverlay
              bg="none"
              backdropFilter={"auto"}
              backdropBlur={"5px"}
            />
            <ModalContent>
              <ModalHeader>
                Hello, {sessionStorage.getItem("firstName")}
              </ModalHeader>
              <ModalCloseButton />

              <ModalFooter>
                <Button
                  colorScheme={"green"}
                  m={2}
                  onClick={() => navigate("/order")}
                >
                  Let's Go!
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </motion.div>
    </>
  );
};

export default SignIn;
