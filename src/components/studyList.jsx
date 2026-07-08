import StudyItem from "./StudyItem";

function StudyList({ studies, handleRemoveStudy, handleToggleCompleted }) {
  return (
    <ul>
      {studies.map((item) => (
        <StudyItem
          key={item.id}
          item={item}
          handleRemoveStudy={handleRemoveStudy}
          handleToggleCompleted={handleToggleCompleted}
        />
      ))}
    </ul>
  );
}

export default StudyList;
