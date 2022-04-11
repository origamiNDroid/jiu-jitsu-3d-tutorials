const nodes = [
    {
        id: 'STANDUP',
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
        }
    },
    {
        id: 'STANDING_OPEN_GUARD',
        data: {
            label: 'Standing Open Guard',
        },
    },
    {
        id: 'OPEN_GUARD',
        data: {
            label: 'Open Guard',
        },
    },
    {
        id: 'CLOSED_GUARD',
        data: {
            label: 'Closed Guard',
        },
    },
    {
        id: 'HALF_GUARD',
        data: {
            label: 'Half Guard',
        },
    },
    {
        id: 'SIDE_CONTROL',
        data: {
            label: 'Side Control',
        },
    },
    {
        id: 'MOUNT_CONTROL',
        data: {
            label: 'Mount Control',
        },
    },
    {
        id: 'BACK_CONTROL',
        data: {
            label: 'Back Control',
        },
    },
    {
        id: 'SUBMISSION',
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
        }
    }
];

export default nodes;