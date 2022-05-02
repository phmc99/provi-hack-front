import * as React from 'react';
import Radio from '@mui/material/Radio';
import { useEffect } from 'react';

export default function CustomRadioBtn({ answerForRadio, handleChooseAnswer, answer, whichQuestion }) {

    useEffect(() => {
        return () => {
        }
    }, [whichQuestion])

    return (
        <Radio
            checked={answer === answerForRadio}
            onChange={handleChooseAnswer}
            value={answerForRadio}
            name='radio-answering-btns'
            sx={{
                '& .MuiSvgIcon-root': {
                    color: 'green'
                }
            }}
        />
    );
}
