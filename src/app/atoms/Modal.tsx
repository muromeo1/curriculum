import { Dialog, Transition } from "@headlessui/react";
import cn from "classnames";
import Typography from "./Typography";
import { XLg } from "react-bootstrap-icons";

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ open, setOpen, title, children }: ModalProps) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Transition appear show={open}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />

      <Dialog className="relative z-10 overflow-y-auto" onClose={onClose}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        />

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={cn(
                "flex flex-col gap-4 lg:max-w-[100vh] min-h-[40vh] transform",
                "lg:rounded-2xl bg-zinc-800 overflow-y-auto align-middle shadow-xl",
                "py-[60px] lg:px-[80px] px-[40px] lg:w-full lg:h-full",
                "w-screen h-screen transition-all"
              )}
            >
              <Dialog.Title className="text-center mb-3">
                <Typography.Body text={title} />
              </Dialog.Title>

              <XLg
                size={25}
                color="#fff"
                className="z-20 cursor-pointer absolute top-6 right-6"
                onClick={onClose}
              />

              <div className="flex flex-col gap-8">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
