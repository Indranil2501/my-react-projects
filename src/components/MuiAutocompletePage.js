import React, { useState } from 'react';
import { Typography, Box, Autocomplete, TextField, Chip } from '@mui/material';

const MuiAutocompletePage = () => {
    const data = [
        { title: "C01 - Harry Potter" },
        { title: "IJS - Hermione Granger" },
        { title: "C03 - Ron Weasley" },
        { title: "JAQ - Albus Dumbledore" },
        { title: "K05 - Severus Snape" },
        { title: "C06 - Draco Malfoy" },
        { title: "C07 - Rubeus Hagrid" },
        { title: "C08 - Sirius Black" },
        { title: "C09 - Remus Lupin" },
        { title: "F10 - Minerva McGonagall" },
        { title: "C11 - Bellatrix Lestrange" },
        { title: "AAA - Lord Voldemort" },
        { title: "C13 - Neville Longbottom" },
        { title: "C14 - Luna Lovegood" },
        { title: "S15 - Ginny Weasley" },
        { title: "C16 - Fred Weasley" },
        { title: "C17 - George Weasley" },
        { title: "C18 - Molly Weasley" },
        { title: "C19 - Arthur Weasley" },
        { title: "C20 - Percy Weasley" },
        { title: "UUA - Nymphadora Tonks" },
        { title: "C22 - Filius Flitwick" },
        { title: "C23 - Sybill Trelawney" },
        { title: "C24 - Gilderoy Lockhart" },
        { title: "C25 - Dolores Umbridge" },
        { title: "C26 - Cornelius Fudge" },
        { title: "AOS - Argus Filch" },
        { title: "JAS - Madam Hooch" },
        { title: "IJA - Viktor Krum" },
        { title: "A30 - Cedric Diggory" },
        { title: "C31 - Cho Chang" },
        { title: "C32 - Fleur Delacour" },
        { title: "C33 - Lucius Malfoy" },
        { title: "T34 - Narcissa Malfoy" },
        { title: "C35 - Peter Pettigrew" },
        { title: "C36 - Barty Crouch Jr." },
        { title: "U23 - Barty Crouch Sr." },
        { title: "C38 - Kreacher" },
        { title: "C39 - Dobby" },
        { title: "C40 - Winky" },
        { title: "C41 - Nearly Headless Nick" },
        { title: "C42 - The Bloody Baron" },
        { title: "C43 - The Grey Lady" },
        { title: "Y44 - The Fat Friar" },
        { title: "C45 - Peeves" },
        { title: "C46 - Madam Pomfrey" },
        { title: "U47 - Oliver Wood" },
        { title: "P09 - Angelina Johnson" },
        { title: "C49 - Katie Bell" },
        { title: "C50 - Alicia Spinnet" },
        { title: "I89 - Lee Jordan" },
        { title: "C52 - Dean Thomas" },
        { title: "C53 - Seamus Finnigan" },
        { title: "C54 - Parvati Patil" },
        { title: "C55 - Padma Patil" },
        { title: "C56 - Lavender Brown" },
        { title: "C57 - Vincent Crabbe" },
        { title: "OAS - Gregory Goyle" },
        { title: "E59 - Pansy Parkinson" },
        { title: "C60 - Blaise Zabini" },
        { title: "C61 - Millicent Bulstrode" },
        { title: "C62 - Theodore Nott" },
        { title: "C63 - Daphne Greengrass" },
        { title: "C64 - Astoria Greengrass" },
        { title: "C65 - Cormac McLaggen" },
        { title: "C66 - Romilda Vane" },
        { title: "I67 - Zacharias Smith" },
        { title: "C68 - Ernie Macmillan" },
        { title: "C69 - Hannah Abbott" },
        { title: "C70 - Justin Finch-Fletchley" },
        { title: "U71 - Susan Bones" },
        { title: "C72 - Terry Boot" },
        { title: "C73 - Anthony Goldstein" },
        { title: "C74 - Michael Corner" },
        { title: "C75 - Marietta Edgecombe" },
        { title: "Y76 - Roger Davies" },
        { title: "C77 - Penelope Clearwater" },
        { title: "C78 - Marcus Flint" },
        { title: "C79 - Adrian Pucey" },
        { title: "C80 - Terence Higgs" },
        { title: "C81 - Alicia Spinnet" },
        { title: "YYP - Zacharias Smith" },
        { title: "C83 - Susan Bones" },
        { title: "C84 - Ernie Macmillan" },
        { title: "C85 - Hannah Abbott" },
        { title: "C86 - Justin Finch-Fletchley" },
        { title: "UAB - Anthony Goldstein" },
        { title: "CII - Terry Boot" },
        { title: "C89 - Michael Corner" },
        { title: "C90 - Cho Chang" },
        { title: "BGS - Marietta Edgecombe" },
        { title: "C92 - Roger Davies" },
        { title: "C93 - Penelope Clearwater" },
        { title: "C94 - Marcus Flint" },
        { title: "YHA - Adrian Pucey" },
        { title: "C96 - Terence Higgs" },
        { title: "C97 - Katie Bell" },
        { title: "C98 - Oliver Wood" },
        { title: "UUN - Angelina Johnson" },
        { title: "00A - Alicia Spinnet" }
    ];

    // Utility function to extract code and name
    const extractCodeAndName = (title) => {
        const [code, name] = title.split(' - ');
        return { code, name };
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event, newValue) => {
        // Ensure unique selected items
        const uniqueSelectedItems = Array.from(new Set([...newValue, ...selectedItems]));
        setSelectedItems(uniqueSelectedItems);
    };

    const renderTags = (value, getTagProps) =>
        value.map((option, index) => (
            <Chip
                key={option.title}
                label={option.title}
                {...getTagProps({ index })}
            />
        ));

    const filterOptions = (options, state) => {
        const searchTerm = state.inputValue.toLowerCase();

        if (!searchTerm == false) {
            // Filter options based on search term
            const filteredOptions = options.filter(option => {
                const { code, name } = extractCodeAndName(option.title);
                return code.toLowerCase().startsWith(searchTerm) || name.toLowerCase().startsWith(searchTerm);
            });

            // Filter options where the search term is contained anywhere within the code or name
            const containsOptions = options.filter(option => {
                const { code, name } = extractCodeAndName(option.title);
                return (
                    (code.toLowerCase().includes(searchTerm) || name.toLowerCase().includes(searchTerm)) &&
                    !filteredOptions.includes(option)
                );
            });

            // Sort filtered options
            const sortedOptions = filteredOptions.sort((a, b) => {
                const { code: codeA, name: nameA } = extractCodeAndName(a.title);
                const { code: codeB, name: nameB } = extractCodeAndName(b.title);

                // Check if code starts with search term
                const codeAStartsWith = codeA.toLowerCase().startsWith(searchTerm);
                const codeBStartsWith = codeB.toLowerCase().startsWith(searchTerm);

                // Prioritize by code first, then by name if codes match
                if (codeAStartsWith && !codeBStartsWith) return -1;
                if (!codeAStartsWith && codeBStartsWith) return 1;

                // If both have matching codes, or neither have matching codes, sort by name
                return nameA.localeCompare(nameB);
            });

            return [...sortedOptions, ...containsOptions];
        } else {
            return options;
        }
    };
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Autocomplete Page</Typography>
            <Typography variant="body1">This is the Autocomplete page content.</Typography>
            <Box
                height={200}
                width={800}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <Typography variant="h4" gutterBottom>
                    Autocomplete - Demo
                </Typography>
                <Box sx={{ width: 300 }}>
                    <Autocomplete
                        multiple
                        options={data}
                        filterOptions={filterOptions}
                        getOptionLabel={(option) => option.title}
                        renderTags={renderTags}
                        onChange={handleChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Search"
                                placeholder="Search by code or name"
                            />
                        )}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default MuiAutocompletePage;