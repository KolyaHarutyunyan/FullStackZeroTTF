import Input from "./Input";
import Button from "./Button";

const FieldsArea = ({ fields = [], handleChange }) => {
  return (
    <div className="fields-container">
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.name}
          type={field.type}
          name={field.name}
          defaultValue={field.value}
          onChange={(e) => handleChange({ ...field, value: e.target.value })}
        />
      ))}
      <Button type={"submit"} label={"Save"} />
    </div>
  );
};

export default FieldsArea;
