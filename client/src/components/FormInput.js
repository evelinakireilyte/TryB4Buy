const FormInput = ({ name, data, id, type, errorInfo, handleFormChange }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        min="0"
        max="1000000"
        id={id}
        name={name}
        value={data[id]}
        onChange={handleFormChange}
      />
    </div>
  )
}

export default FormInput
