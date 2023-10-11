interface TypeProjectTags {
  name: string;
  onClick: any;
  isSelected: boolean;
}

const ProjectTags = ({ name, onClick, isSelected }: TypeProjectTags) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTags;
