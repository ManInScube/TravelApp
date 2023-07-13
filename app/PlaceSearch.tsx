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



export default function PlaceSearch({handler, setOffice, setOrigin, placeholder}){

    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions
    } = usePlacesAutocomplete();



    // const handleSelect = async (val: string) => {
    //     setValue(val, false);
    //    // clearSuggestions(); //!!!
    //     const result = await getGeocode({address: val});
    //     const {lat, lng} = await getLatLng(result[0]);
    //     addPlace({lat, lng});
    //     setOffice({lat, lng});
    // }

    // const handleOrigin = async (val:string )=>{
    //     setValue(val, false);
    //     //clearSuggestions();
    //     const result = await getGeocode({address: val});
    //     const {lat, lng} = await getLatLng(result[0]);
    //     setOrigin({lat, lng});
    // }


    const handleSelect = async (val: string) => {
        setValue(val, false);
       clearSuggestions(); //!!!
        const result = await getGeocode({address: val});
        const {lat, lng} = await getLatLng(result[0]);
        handler({lat, lng});
    }


    return(
        <>
            {/* <Combobox onSelect={handleOrigin}>
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
            </Combobox> */}

            <Combobox onSelect={handleSelect}>
                <ComboboxInput value={value}
                onChange={(e)=>setValue(e.target.value)}
                disabled={!ready}
                style={{height: 25}}
                placeholder={placeholder}
                />
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