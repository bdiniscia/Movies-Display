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