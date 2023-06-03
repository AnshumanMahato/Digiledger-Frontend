import Button from "../../utils/Button";

function Actions() {
  return (
    <div className="col-start-2 row-start-3 flex justify-evenly items-center p-3">
      <Button success>Apply</Button>
      <Button danger>Clear</Button>
    </div>
  );
}

export default Actions;
