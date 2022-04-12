const edges = [
    {
        id: 't1-2',
        source: 'STANDUP',
        target: 'STANDING_OPEN_GUARD',
        data: {
            transitions: ['Double_Leg', 'Hip_Throw']
        },
        animated: true,
    },
    {
        id: 't-3',
        source: 'STANDUP',
        target: 'HALF_GAURD',
        data: {
            transitions: ['Inside_Trip']
        },
        animated: true,
    },
    {
        id: 't4-5',
        source: 'STANDING_OPEN_GUARD',
        target: 'SIDE_CONTROL',
        data: {
            transitions: ['Toreando_Pass', 'Standing_Knee_Cut_Pass']
        },
        animated: true,
    },
    {
        id: 't6',
        source: 'STANDING_OPEN_GUARD',
        target: 'STANDING_OPEN_GUARD',
        data: {
            transitions: ['Tripod_Sweep']
        },
        animated: true,
    },
    {
        id: 't7',
        source: 'CLOSED_GUARD',
        target: 'MOUNT_CONTROL',
        data: {
            transitions: ['Guard_Break']
        },
        animated: true,
    },
    {
        id: 't8',
        source: 'CLOSED_GUARD',
        target: 'STANDING_OPEN_GUARD',
        data: {
            transitions: ['Standing_Guard_Break']
        },
        animated: true,
    },
    {
        id: 't9-10-11-12',
        source: 'CLOSED_GUARD',
        target: 'SUBMISSION',
        data: {
            transitions: ['Armbar_from_Guard', 'Triangle_from_Guard',
                            'Omoplata_from_Guard', 'Kimura_from_Guard']
        },
        animated: true,
    },
    {
        id: 't13-14',
        source: 'CLOSED_GUARD',
        target: 'MOUNT_CONTROL',
        data: {
            transitions: ['Scissor_Sweep', 'Bump_Sweep']
        },
        animated: true,
    },
    {
        id: 't15',
        source: 'OPEN_GUARD',
        target: 'SUBMISSION',
        data: {
            transitions: ['Frame_Guard_Triangle']
        },
        animated: true,
    },
    {
        id: 't16',
        source: 'OPEN_GUARD',
        target: 'MOUNT_CONTROL',
        data: {
            transitions: ['Hook_Sweep']
        },
        animated: true,
    },
    {
        id: 't17',
        source: 'OPEN_GUARD',
        target: 'CLOSED_GUARD',
        data: {
            transitions: ['Pull_Closed_Guard']
        },
        animated: true,
    },
    {
        id: 't18',
        source: 'OPEN_GUARD',
        target: 'SIDE_CONTROL',
        data: {
            transitions: ['Knee_Cut_Pass']
        },
        animated: true,
    },
    {
        id: 't19',
        source: 'OPEN_GUARD',
        target: 'HALF_GUARD',
        data: {
            transitions: ['Stepover_to_Half']
        },
        animated: true,
    },
    {
        id: 't20-21-38',
        source: 'HALF_GUARD',
        target: 'SUBMISSION',
        data: {
            transitions: ['Half_Guard_Kimura', 'Half_Guard_Americana', 'Bottom_Half_Kimura']
        },
        animated: true,
    },
    {
        id: 't22',
        source: 'HALF_GUARD',
        target: 'HALF_GUARD',
        data: {
            transitions: ['Half_Guard_Sweep']
        },
        animated: true,
    },
    {
        id: 't23',
        source: 'OPEN_GUARD',
        target: 'SUBMISSION',
        data: {
            transitions: ['Half_Guard_Pass_Side']
        },
        animated: true,
    },
    {
        id: 't24',
        source: 'HALF_GUARD',
        target: 'MOUNT_CONTROL',
        data: {
            transitions: ['Half_Guard_Pass_Mount']
        },
        animated: true,
    },
    {
        id: 't25-26-27-28',
        source: 'MOUNT_CONTROL',
        target: 'SUBMISSION',
        data: {
            transitions: ['Mount_Americana', 'Mount_Armbar',
                            'Mount_Arm_Triangle', 'Mount_Triangle']
        },
        animated: true,
    },
    {
        id: 't29',
        source: 'MOUNT_CONTROL',
        target: 'HALF_GUARD',
        data: {
            transitions: ['Mount_Escape']
        },
        animated: true,
    },
    {
        id: 't30',
        source: 'MOUNT_CONTROL',
        target: 'CLOSED_GUARD',
        data: {
            transitions: ['Mount_Sweep']
        },
        animated: true,
    },
    {
        id: 't31',
        source: 'SIDE_CONTROL',
        target: 'CLOSED_GUARD',
        data: {
            transitions: ['Recover_from_Side']
        },
        animated: true,
    },
    {
        id: 't32',
        source: 'OPEN_GUARD',
        target: 'BACK_CONTROL',
        data: {
            transitions: ['Arm_Drag']
        },
        animated: true,
    },
    {
        id: 't33',
        source: 'MOUNT_CONTROL',
        target: 'BACK_CONTROL',
        data: {
            transitions: ['Back_Take_from_Mount']
        },
        animated: true,
    },
    {
        id: 't34-35',
        source: 'BACK_CONTROL',
        target: 'SUBMISSION',
        data: {
            transitions: ['Rear_Naked_Choke', 'Armbar_from_Back']
        },
        animated: true,
    },
    {
        id: 't36',
        source: 'BACK_CONTROL',
        target: 'CLOSED_GUARD',
        data: {
            transitions: ['Back_Escape_to_Guard']
        },
        animated: true,
    },
    {
        id: 't37',
        source: 'BACK_CONTROL',
        target: 'MOUNT_CONTROL',
        data: {
            transitions: ['Back_Escape_to_Mount']
        },
        animated: true,
    },
    {
        id: 't39-40',
        source: 'STANDUP',
        target: 'SUBMISSION',
        data: {
            transitions: ['Standing_Guillotine', 'Flying_Armbar']
        },
        animated: true,
    }
];

export default edges;