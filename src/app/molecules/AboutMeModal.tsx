import { FC } from "react";
import Modal, { ModalProps } from "../atoms/Modal";
import Typography from "../atoms/Typography";

const yearsDiff = (date: Date) => {
  const currentDate = new Date();

  return currentDate.getFullYear() - date.getFullYear();
};

const AboutMeModal: FC<Omit<ModalProps, "children" | "title">> = ({
  open,
  setOpen,
}) => {
  const birthday = new Date(1998, 9, 23);
  const firstJob = new Date(2018, 7, 1);

  return (
    <Modal open={open} setOpen={setOpen} title="About me">
      <Typography.Description>
        I'm {yearsDiff(birthday)} years old, graduated in Analysis Systems
        Development on FATEC Zona Leste, one of the greatest colleges in Brazil
        and I've been a Ruby on Rails developer for about {yearsDiff(firstJob)}{" "}
        years
      </Typography.Description>

      <Typography.Description>
        I'm always looking for new technologies to improve my knowledge and to
        keep me up to date with what's new. I usually keep myself updated with
        Front-End technologies too, so I'm always studying and researching about
        new stacks and structures.
      </Typography.Description>

      <Typography.Description>
        I'm very active and I don't like to stand still. I always want to
        extract the best performance from my codes along with the best
        practices.
      </Typography.Description>
    </Modal>
  );
};

export default AboutMeModal;
