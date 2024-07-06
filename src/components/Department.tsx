import { Box, Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Department = () => {
    const [activeDepartment, setActiveDepartment] = useState<string | null>(null);
    const [departments, setDepartments] = useState([
        {
            department: "customer_service",
            sub_departments: [
                { name: "support", selected: false },
                { name: "customer_success", selected: false }
            ],
            selected: false
        },
        {
            department: "design",
            sub_departments: [
                { name: "graphic_design", selected: false },
                { name: "product_design", selected: false },
                { name: "web_design", selected: false }
            ],
            selected: false
        }
    ]);

    const toggleDepartmentSelection = (departmentIndex: number) => {
        const updatedDepartments = [...departments];
        updatedDepartments[departmentIndex] = {
            ...updatedDepartments[departmentIndex],
            selected: !updatedDepartments[departmentIndex].selected,
            sub_departments: updatedDepartments[departmentIndex].sub_departments.map(subDep => ({
                ...subDep,
                selected: !updatedDepartments[departmentIndex].selected
            }))
        };
        setDepartments(updatedDepartments);
    };

    const toggleSubDepartmentSelection = (departmentIndex: number, subDepartmentIndex: number) => {
        const updatedDepartments = [...departments];
        updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex] = {
            ...updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex],
            selected: !updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex].selected
        };

        const allSubsSelected = updatedDepartments[departmentIndex].sub_departments.every(subDep => subDep.selected);
        updatedDepartments[departmentIndex].selected = allSubsSelected;

        setDepartments(updatedDepartments);
    };

    return (
        <Stack justifyContent={"center"} direction={"row"} mt={4}>
            <Box>
                <FormGroup>
                    {departments.map((value, i) => {
                        const isActive = value.department === activeDepartment;
                        return (
                            <Box key={i}>
                                <Stack direction={"row"} alignItems={'center'} gap={2}>
                                    {isActive ? (
                                        <KeyboardArrowDownIcon
                                            onClick={() => setActiveDepartment(null)}
                                            sx={{ cursor: "pointer" }}
                                        />
                                    ) : (
                                        <KeyboardArrowUpIcon
                                            onClick={() => setActiveDepartment(value.department)}
                                            sx={{ cursor: "pointer" }}
                                        />
                                    )}
                                    <FormControlLabel
                                        label={value.department}
                                        control={
                                            <Checkbox
                                                checked={value.selected}
                                                onChange={() => toggleDepartmentSelection(i)}
                                            />
                                        }
                                    />
                                </Stack>
                                {isActive && (
                                    <Box sx={{ ml: 10 }}>
                                        {value.sub_departments.map((subDep, j) => (
                                            <Box key={j}>
                                                <FormControlLabel
                                                    label={subDep.name}
                                                    control={
                                                        <Checkbox
                                                            checked={subDep.selected}
                                                            onChange={() => toggleSubDepartmentSelection(i, j)}
                                                        />
                                                    }
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        );
                    })}
                </FormGroup>
            </Box>
        </Stack>
    );
};

export default Department;
