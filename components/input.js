/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-css-tags */

function Input() {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        fontFamily: "Helvetica",
        fontSize: 18,
        margin: "auto",
      }}
    >
      <form>
        <label>
          <input
            type="text"
            name="input"
            style={{
              border: "1px solid rgb(26, 28, 158)",
              borderRadius: 10,
              backgroundColor: "rgb(238, 238, 252)",
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
