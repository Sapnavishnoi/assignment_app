// import { Fragment, useState } from "react";
// import { Combobox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// const city = [
//   { id: 1, name: "Delhi" },
//   { id: 2, name: "Mumbai" },
//   { id: 3, name: "Bangaluru" },
// ];

// export default function Autosearch(props) {
//   const [selected, setSelected] = useState("");
//   const [query, setQuery] = useState("");

//   const filteredPeople =
//     query === ""
//       ? city
//       : city.filter((person) =>
//           person.name
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="fixed top-16 w-72">
//         <Combobox value={selected} onChange={setSelected}>
//           <div className="relative mt-1">
//             <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//               <Combobox.Input
//                 className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
//                 displayValue={(person) => person.name}
//                 onChange={(event) => setQuery(event.target.value)}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//                 search{(person) => props.handleCallback(person.name)}
//               </Combobox.Button>
//             </div>
//             <Transition
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//               afterLeave={() => setQuery("")}
//             >
//               <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {filteredPeople.length === 0 && query !== "" ? (
//                   <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                     Nothing found.
//                   </div>
//                 ) : (
//                   filteredPeople.map((person) => (
//                     <Combobox.Option
//                       key={person.id}
//                       className={({ active }) =>
//                         `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                           active ? "bg-teal-600 text-white" : "text-gray-900"
//                         }`
//                       }
//                       value={person}
//                     >
//                       {({ selected, active }) => (
//                         <>
//                           <span
//                             className={`block truncate ${
//                               selected ? "font-medium" : "font-normal"
//                             }`}
//                           >
//                             {person.name}
//                           </span>
//                           {selected ? (
//                             <span
//                               className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                 active ? "text-white" : "text-teal-600"
//                               }`}
//                             >
//                               <CheckIcon
//                                 className="h-5 w-5"
//                                 aria-hidden="true"
//                               />
//                             </span>
//                           ) : null}
//                         </>
//                       )}
//                     </Combobox.Option>
//                   ))
//                 )}
//               </Combobox.Options>
//             </Transition>
//           </div>
//         </Combobox>
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CountrySelect(props) {
  const [value, setValue] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    props.handleCallback(value);
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="5%"
      >
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option?.label}
          //   value={value}
          onChange={(event, newValue) => {
            event.preventDefault();
            setValue(newValue?.label);
          }}
          renderOption={(props, option) => (
            <Box
              label="Choose a city"
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option?.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a city"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>
      {/* <Stack spacing={2} direction="row"> */}
      <Button variant="contained" onClick={handleClick}>
        Current weather
      </Button>

      {/* </Stack> */}
    </div>
  );
}
const countries = [
  { id: 1, label: "Delhi" },
  { id: 2, label: "Mumbai" },
  { id: 3, label: "Bangaluru" },
];
