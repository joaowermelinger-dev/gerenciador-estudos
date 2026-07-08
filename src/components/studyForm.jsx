function StudyForm({ study, handleChange, handleAddStudy }) {
  return (
    <div>
      <input onChange={handleChange} value={study} />
      <button onClick={handleAddStudy}>Adicionar!</button>
    </div>
  );
}
export default StudyForm;
