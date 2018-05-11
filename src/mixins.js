import moment from 'moment'

export const mixins = {
    filters: {
        formatDate(value) {
            return moment(value).format('YYYY-MM-DD HH:mm:ss')
        },
        diffForHumans(value) {
            return moment(value).fromNow()
        }
    }
}