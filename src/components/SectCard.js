import React from "react";

const SectCard = ({ title, description,titleTag, desTag, cardType }) => {
  const Tag1 = titleTag;
  const Tag2 = desTag;

  return (
    <div className={cardType}>
      <Tag1>{title}</Tag1>
      <Tag2>{description}</Tag2>
    </div>
  );
};

export default SectCard;
