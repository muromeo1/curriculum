import { FC } from "react";
import { StarFill, ArrowRight } from "react-bootstrap-icons";

import Modal, { ModalProps } from "../atoms/Modal";
import Typography from "../atoms/Typography";

const STACKS_IN_YEARS = {
  Ruby: 5,
  NextJS: 2,
};

const TechnologiesModal: FC<Omit<ModalProps, "children" | "title">> = ({
  open,
  setOpen,
}) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Technologies">
      {Object.entries(STACKS_IN_YEARS).map(([stack, stars]) => (
        <div className="flex flex-row gap-2 w-full">
          <div className="w-2/7 text-left">
            <Typography.Description text={stack} />
          </div>

          <div className="w-1/7">
            <ArrowRight color="#9e9e9e" className="mt-1" size={20} />
          </div>

          <div className="flex flex-row gap-1 mt-1 w-4/7">
            {[...Array(stars)].map((_, i) => (
              <StarFill key={i} size={20} color="#f5c66e" />
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default TechnologiesModal;
