import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

function TextNLabel({placeHolder, isLabelShown, setIsLabelShown, setLabel, courseArray, courseIndex, label }) {

    const [labelIn, setLabelIn] = useState(label)

    return (
        isLabelShown ?
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography fontSize={20} >
                        {label}
                    </Typography>
                </div>
            )
            :
            (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        placeholder={placeHolder}
                        variant="filled"
                        onChange={(e) => setLabelIn(e.target.value)}
                        label={placeHolder}
                        value={labelIn} />
                    <Button onClick={() => {
                        setLabel(labelIn)
                        setIsLabelShown(!isLabelShown)
                    }} sx={{ marginLeft: "12px" }} variant='contained'>
                        <Typography>
                            Set Title
                        </Typography>

                    </Button>
                </div>
            )
    )
}

export default TextNLabel;
