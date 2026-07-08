function StudyItem({ item, handleRemoveStudy, handleToggleCompleted }) {
  return (
    <li>
      <button onClick={() => handleToggleCompleted(item.id)}>
        {item.completed ? "☑" : "☐"}
      </button>

      {item.name}

      <button onClick={() => handleRemoveStudy(item.id)}>Remover</button>
    </li>
  );
}

export default StudyItem;
