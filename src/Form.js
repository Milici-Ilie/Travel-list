import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); //this state is to connect the input field 'Item...' with the content of stuffs the we cand choose/select. This is also called 'Controlled elements'
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //to prevent from reloading the browser, using this preventer for not to reload the page we will build this application for this single page and no needs to reload...... this 'handleSubmit' function is connect with the 'return' from bellow, more exactl with the onSubmit={hanbleSubmit}
    if (!description) return; //if there is no description inside the 'input field' than nothing should happened when the 'Add' button is pressed

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem); // here also ////// we called the function with the new Item /////////////////////////////////

    setDescription("");
    setQuantity(1); //this and the one from above will reset the quantity of selected items and the description of what stuffs we need
  }

  //the 'value' from the <select></select> inside of 'onChange' is coming from the <option>
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form> //the 'value' form is related with the [description, setDescription] state ...In the 'input' value we alwasys need both the 'value' and 'onChange' to take the inputed value in the 'input field' with e.target witch is the 'input field' by hinself and the '.value' witch is our options that we typed inside the input field
  );
}
