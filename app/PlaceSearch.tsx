import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";



export default function PlaceSearch({addPlace, setOffice}){

    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions
    } = usePlacesAutocomplete();


    const handleSelect = async (val: string) => {
        setValue(val, false);
        clearSuggestions();
        const result = await getGeocode({address: val});
        const {lat, lng} = await getLatLng(result[0]);
        addPlace({lat, lng});
        setOffice({lat, lng});
    }


    return(
        <>
            <Combobox onSelect={handleSelect}>
                <ComboboxInput value={value}
                onChange={e=>setValue(e.target.value)}
                disabled={!ready}/>
                <ComboboxPopover>
                    <ComboboxList>
                        {status==="OK" && 
                            data.map(({place_id, description})=>(
                                <ComboboxOption key={place_id} value={description}/>
                            ))
                        }
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>

        </>
    )
}