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

      {/* <Input
        label={"Field 2"}
        type={"text"}
        name={"Field2"}
        defaultValue={field2Value}
        onChange={onChangeField2}
      />
      <Input
        label={"Field 3"}
        type={"text"}
        name={"Field3"}
        defaultValue={field3Value}
        onChange={onChangeField3}
      /> */}
      <Button type={"submit"} label={"Save"} />
    </div>
  );
};

export default FieldsArea;
