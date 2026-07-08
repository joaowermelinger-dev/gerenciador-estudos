function StudyItem({ item, handleRemoveStudy, handleToggleCompleted }) {
  const studyNameClass = item.completed ? "study-name completed" : "study-name";

  return (
    <li>
      <button onClick={() => handleToggleCompleted(item.id)}>
        {item.completed ? "☑" : "☐"}
      </button>

      <span className={studyNameClass}>{item.name}</span>

      <button onClick={() => handleRemoveStudy(item.id)}>Remover</button>
    </li>
  );
}

export default StudyItem;
