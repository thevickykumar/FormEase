import { useState } from "react";
import PartyInfo from "./PartyInfo";
function Parties() {
  // This is the state which holds the party list, by defalut it has two parties
  const [partyList, setPartyList] = useState([
    {
      name: "Booking",
      toggler: "collapseOne",
      containerClass: "containerOne",
    },
    {
      name: "Opposing",
      toggler: "collapseTwo",
      containerClass: "containerTwo",
    },
  ]);

  // This function adds a new party to the party list
  const addParty = () => {
    const newParty = {
      name: "Opposing",
      toggler: `collapse${partyList.length + 1}`,
      containerClass: `container${partyList.length + 1}`,
    };
    setPartyList([...partyList, newParty]);
  };

  // This function removes a party from the party list
  const removeParty = (indexToRemove) => {
    if (indexToRemove > 1) {
      const updatedPartyList = partyList.filter(
        (_, index) => index !== indexToRemove
      );
      setPartyList(updatedPartyList);
    }
  };

  return (
    <>
      {partyList.map((party, index) => (
        <div key={index} className="mb-2">
          <PartyInfo
            name={party.name}
            toggler={party.toggler}
            containerClass={party.containerClass}
          />
          {index > 1 && (
            <button
              type="button"
              className="btn btn-danger rounded-0 p-3"
              onClick={() => removeParty(index)}
            >
              Remove Party
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="btn btn-dark rounded-0 p-3"
        onClick={addParty}
      >
        + ADDITIONAL PARTIES
      </button>
    </>
  );
}

export default Parties;
