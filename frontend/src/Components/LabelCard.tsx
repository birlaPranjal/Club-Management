import React from "react";
import style from "../styles/LabelCard.module.css";
interface LabelCardProps {
  label: string;
  onClick: () => void;
}

const LabelCard: React.FC<LabelCardProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className={style.labelCard}>
      {label}
    </div>
  );
};

export default LabelCard;
