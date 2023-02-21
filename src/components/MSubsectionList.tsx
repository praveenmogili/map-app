import React from "react";

const defaultItems = [
  { name: "Surveys", onClick: () => {} },
  { name: "Templates", onClick: () => {} },
  { name: "Blocks", onClick: () => {} },
];

interface MSubsectionListProps {
  items?: { name: string; onClick: () => void }[];
}

const MSubsectionList = (props: MSubsectionListProps) => {
  const { items = defaultItems } = props;
  return (
    <div className="my-3 m-subsection-list">
      {items.map((item, i) => {
        return (
          <button
            className="subsection-list-item"
            key={i}
            onClick={item.onClick}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default MSubsectionList;
