import RenderedOption from "./RenderedOptions";

function PartyOptions({ current, update }) {
  let options = [
    "Zx3Tq",
    "vY8nR",
    "mG6sP",
    "Lw4Kj",
    "fH1cB",
    "Eo9dA",
    "rU7gF",
    "Nq2iM",
    "kS5lO",
    "Cj0eW",
    "Xp8hV",
    "tD4aU",
    "nG3bS",
    "lQ6fR",
    "hJ9kP",
    "yI1mO",
    "Wc5nN",
    "uF7eL",
    "Mk8dZ",
    "aT2gB",
  ];

  options = options.map((option) => ({ label: option, value: option }));

  return (
    <ul className="overflow-auto h-full">
      {<RenderedOption options={options} current={current} update={update} />}
    </ul>
  );
}

export default PartyOptions;
