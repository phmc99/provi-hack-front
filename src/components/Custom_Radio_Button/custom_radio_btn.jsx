import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CustomRadioBtn({ labelForRadio, handleChooseAnswer, answer }) {

    return (
        <Radio
            checked={answer === labelForRadio}
            onChange={handleChooseAnswer}
            value={labelForRadio}
            name='radio-answering-btns'
            sx={{
                '& .MuiSvgIcon-root': {
                    fontSize: 32,
                    color: 'green'
                },
            }}
        />
    );
}
