import React from "react";

function NewOrder() {
  return (
    <form>
      <h2>New order</h2>
      <div>
        <label for="normal">
          Normal
          <input type="radio" id="normal" name="crust" value="NORMAL" />
        </label>

        <label for="thin">
          Thin
          <input type="radio" id="thin" name="crust" value="THIN" />
        </label>
      </div>

      <div>
        <label for="flavor">Flavor</label>
        <input id="flavor" type="text" />
      </div>

      <div>
        <label for="size">Choose a size:</label>

        <select id="size">
          <option value=""></option>
          <option value="S">Small (4 pieces)</option>
          <option value="M">Medium (6 pieces)</option>
          <option value="L">Larger (8 pieces)</option>
          <option value="XL">Extra-large (10 pieces)</option>
        </select>
      </div>

      <div>
        <label for="tableNo">Table No</label>
        <input id="tableNo" type="number" />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

export default NewOrder;
