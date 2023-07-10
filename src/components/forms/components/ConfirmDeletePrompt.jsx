import Button from "../../utils/Button";

function ConfirmDeletePrompt({ onConfirm: confirm, onCancel: cancel }) {
  return (
    <div className="absolute h-full w-full p-12 flex justify-center items-center bg-accent/30">
      <div className="bg-accent p-5 border-2 rounded-lg text-center text-sm sm:text-base">
        <p>Are you sure you want to delete this transaction?</p>
        <div className="w-full flex justify-evenly mt-5">
          <Button small success onClick={confirm}>
            Confirm
          </Button>
          <Button small danger onClick={cancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeletePrompt;
