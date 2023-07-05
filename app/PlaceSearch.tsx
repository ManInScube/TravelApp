import usePlacesAutocomplete from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";


export default function PlaceSearch(){

    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions
    } = usePlacesAutocomplete();

    return(
        <>
            <Combobox onSelect={()=>{}}>
                <ComboboxInput value={value} onChange={e=>setValue(e.target.value)} disabled={!ready}/>
            </Combobox>
        </>
    )
}