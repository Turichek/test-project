import classNames from "classnames";
import { IconsEnum, SvgIcon } from "components/SvgIcon";

import { ModalPortal } from "../../Portal";

import { SizeModalProps } from "./SideModal.types";

import styles from "./SideModal.module.scss";

export const SideModalComponent: React.FC<SizeModalProps> = ({
  element,
  isOpen,
  onClose,
  children,
  className,
}) => {
  const ModalClass = classNames(
    styles.modal,
    { [styles.active]: isOpen },
    className
  );

  return (
    <>
      <ModalPortal
        el={
          element ? element : (document.getElementById("root") as HTMLElement)
        }
      >
        <div
          className={ModalClass}
          onScroll={(e) => {
            e.stopPropagation();
          }}
          onClick={onClose}
        >
          <div className={styles.modal_container}>
            <div className={styles.header_modal}>
              <SvgIcon
                className={styles.close}
                src={IconsEnum.menu}
                size={24}
                color="grey"
                onClick={onClose}
              />
            </div>
            <div className={styles.modal_content}>{children}</div>
          </div>
        </div>
      </ModalPortal>
    </>
  );
};

SideModalComponent.displayName = "SideModal";
