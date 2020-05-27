export const displayAction = (media) => {
    return {
        type: 'MEDIA_AVAILABLE',
        payload: media
    }
}

export const flagAction = () => {
    return {
        type: 'IS_MEDIA',
    }
}

export const selectedAction = (media) => {
    return {
        type: 'MEDIA_SELECTED',
        payload: media
    }
}

export const flagSelectedAction = () => {
    return {
        type: 'IS_SELECTED',
    }
}

export const incrementAction = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrementAction = () => {
    return {
        type: 'DECREMENT',
    }
}