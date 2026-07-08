function StudyList({ studies, handleRemoveStudy }) {
  return (
    <ul>
      {studies.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleRemoveStudy(item.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default StudyList;
