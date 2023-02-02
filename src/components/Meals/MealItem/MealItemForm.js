import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input label="Количество"> input={{
        id: 'amount',
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1',
      }}</Input>
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;
