import useUIContext from "../../../hooks/useUIContext";
import classNames from "classnames";

function AvatarPanel({ register, value }) {
  const { avatars } = useUIContext();
  const options = Array.from(avatars.keys());

  const renderedPfps = options.map((option) => {
    const classes = classNames(
      "relative inline-block rounded-full transistion-all duration-100 cursor-pointer mx-4 my-2",
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
            className="rounded-full h-12 w-12 sm:h-18 sm:w-18"
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

  return <div className="whitespace-nowrap overflow-auto">{renderedPfps}</div>;
}

export default AvatarPanel;
