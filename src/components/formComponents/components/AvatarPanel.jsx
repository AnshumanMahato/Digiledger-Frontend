import useUIContext from "../../../hooks/useUIContext";
import classNames from "classnames";

function AvatarPanel({ register, value }) {
  const { avatars } = useUIContext();
  const options = Array.from(avatars.keys());

  const renderedPfps = options.map((option) => {
    const classes = classNames(
      "relative inline-block rounded-full transistion-all duration-100 cursor-pointer m-2",
      {
        "outline outline-4 outline-primary outline-offset-2": value === option,
      }
    );
    return (
      <figure key={option} className={classes}>
        <label htmlFor={option}>
          <img
            src={avatars.get(option)}
            alt="user-profile"
            className="rounded-full h-14 w-14 sm:h-20 sm:w-20"
          />
        </label>
        <input
          type="radio"
          id={option}
          value={option}
          {...register("photo")}
          className="hidden"
        />
      </figure>
    );
  });

  return (
    <div className="whitespace-nowrap overflow-auto bg-accent-dark/50 p-1 rounded-lg">
      {renderedPfps}
    </div>
  );
}

export default AvatarPanel;
