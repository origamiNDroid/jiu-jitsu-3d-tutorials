import { inputAdornmentClasses } from "@mui/material";

const nodes = [
    {
        id: 'STANDUP',
        type: 'input',
        data: {
            label: (
                <>
                    <strong>Standup</strong>
                </>
            )
        },
        style: {
            background: '#F0E9B1',
            color: '#333',
            border: '1px solid'
        },
        position: { x: 250, y: 0 }
    },
    {
        id: 'STANDING_OPEN_GUARD',
        data: {
            label: 'Standing Open Guard',
        },
        position: { x: 50, y: 100 }
    },
    {
        id: 'OPEN_GUARD',
        data: {
            label: 'Open Guard',
        },
        position: { x: 250, y: 100 }
    },
    {
        id: 'CLOSED_GUARD',
        data: {
            label: 'Closed Guard',
        },
        position: { x: 450, y: 100} 
    },
    {
        id: 'HALF_GUARD',
        data: {
            label: 'Half Guard',
        },
        position: { x: 50, y: 200 }
    },
    {
        id: 'SIDE_CONTROL',
        data: {
            label: 'Side Control',
        },
        position: { x: 450, y: 200 }
    },
    {
        id: 'MOUNT_CONTROL',
        data: {
            label: 'Mount Control',
        },
        position: { x: 50, y: 300 }
    },
    {
        id: 'BACK_CONTROL',
        data: {
            label: 'Back Control',
        },
        position: { x: 450, y: 300}
    },
    {
        id: 'SUBMISSION',
        type: 'output',
        data: {
            label: (
                <>
                    <strong>Submission</strong>
                </>
            ),
        },
        style: {
            background: '#DB8584',
            color: '#333',
            border: '1px solid'
        },
        position: { x: 250, y: 300 }
    }
];

export default nodes;